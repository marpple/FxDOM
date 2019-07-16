// FxDOM 0.0.14
import {
  isUndefined, isArray, isString,
  head,
  curry, go, pipe, tap,
  each, map,
  defaults,
  L
} from "fxjs2";

const qs = sel => document.querySelector(sel);

const qsa = sel => document.querySelectorAll(sel);

const idCreator = _ => {
  var i = 0;
  return _ => 'fxdom-id-' + i++;
};

const createId = idCreator();

const baseFind = qs => curry((sel, el) => {
  const id = el.id;
  el.id = id || createId();
  const res = el[qs]('#' + el.id + (sel[0] == '&' ? sel.substr(1) : ' ' + sel));
  if (!id) el.removeAttribute('id');
  return res;
});

const find = baseFind('querySelector');

const findAll = baseFind('querySelectorAll');

const children = el => el.children;

const closest = curry((sel, el) => el.closest(sel));

const isEl = node =>
  node && typeof node == 'object' && (node.nodeType == 1 || node.nodeType == 9);

const is = curry((sel, el) => el && matches.call(el, sel));

const nextOrPrevAll = (k, add) => function f(sel, el) {
  if (arguments.length == 1) {
    if (typeof sel == 'string') return el => f(sel, el);
    el = sel;
    sel = '*';
  }
  let res = [], cur = el;
  while ((cur = cur[k])) if (isEl(cur) && is(sel, cur)) res[add](cur);
  return res;
};

const prevAll = nextOrPrevAll('previousSibling', 'unshift');
const nextAll = nextOrPrevAll('nextSibling', 'push');

const nextOrPrev = k => function f(sel, el) {
  if (arguments.length == 1) {
    if (typeof sel == 'string') return el => f(sel, el);
    el = sel;
    sel = '*';
  }
  let cur = el;
  while ((cur = cur[k]) && (!isEl(cur) || !is(sel, cur))) {}
  return cur;
};

const prev = nextOrPrev('previousSibling');
const next = nextOrPrev('nextSibling');

const docEl = document.documentElement;
const matches = docEl.matches || docEl.webkitMatchesSelector || docEl.mozMatchesSelector || docEl.msMatchesSelector;

const contains = curry((parent, child) => parent.contains(child));

const
  fragmentRE = /^\s*<(\w+|!)[^>]*>/,
  table = document.createElement('table'),
  tableRow = document.createElement('tr'),
  div = document.createElement('div'),
  containers = {
    'tr': document.createElement('tbody'),
    'tbody': table, 'thead': table, 'tfoot': table,
    'td': tableRow, 'th': tableRow
  };

const remove = el => el.parentNode.removeChild(el);

const els = html => {
  html = html.trim();
  const name = fragmentRE.test(html) && RegExp.$1;
  const container = containers[name] || div;
  container.innerHTML = html;
  return each(remove, [...container.childNodes]);
};

const el = html => {
  html = html.trim();
  return html[0] == '<' ? head(els(html)) : document.createElement(html);
};

const append = curry((parent, child) => parent.appendChild(child));

const prepend = curry((parent, child) => parent.insertBefore(child, parent.firstChild));

const before = curry((after, before) => after.parentNode.insertBefore(before, after));

const after = curry((before, after) =>
  before.nextSibling ? before(before.nextSibling, after) : append(before.parentNode, after));

const text = el => el.textContent;

const setText = curry((text, el) => (el.textContent = text, el)), set_text = setText;

const html = el => el.innerHTML;

const setHTML = curry((html, el) => (el.innerHTML = html, el)), set_html = setHTML;

const outerHTML = el => el.outerHTML;

const setOuterHTML = curry((html, el) => el.outerHTML = html),  set_outer_html = setOuterHTML;

const val = el => el.value;

const setVal = curry((value, el) => (el.value = value, el)), set_val = setVal;

const attr = curry((k, el) => el.getAttribute(k));

const setAttr = curry((kv, el) => (
  isArray(kv) ?
    el.setAttribute(...kv) :
    each(kv => el.setAttribute(...kv), L.entries(kv)), el)),
  set_attr = setAttr;

const removeAttr = curry((k, el) => (el.removeAttribute(k), el)), remove_attr = removeAttr;

const methodClass = method => curry((class_names, el) => (
  each(cn => el.classList[method](cn), class_names.split(' ')), el
));

const addClass = methodClass('add'), add_class = addClass;
const removeClass = methodClass('remove'), remove_class = removeClass;
const toggleClass = methodClass('toggle'), toggle_class = toggleClass;

function baseScroll(el, val, prop, method) {
  el = el || window;
  var top = prop == "pageYOffset";
  var win = el == window || el == document ? window : null;
  if (val == undefined) return win ? win[ prop ] : el[ method ];
  if (win) win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
  else el[method] = val;
  return el;
}

const scrollTop = el => baseScroll(el, undefined, "pageYOffset", "scrollTop"), scroll_top = scrollTop;

const scrollLeft = el => baseScroll(el, undefined, "pageXOffset", "scrollLeft"), scroll_left = scrollLeft;

const setScrollTop = (val, el) => baseScroll(el, val, "pageYOffset", "scrollTop"), set_scroll_top = setScrollTop;

const setScrollLeft = (val, el) => baseScroll(el, val, "pageXOffset", "scrollLeft"), set_scroll_left = setScrollLeft;

const offset = el => {
  const rect = el.getBoundingClientRect();
  return {
    top: rect.top + window.pageYOffset - docEl.clientTop,
    left: rect.left + window.pageXOffset - docEl.clientLeft
  };
};

const baseOnOff = method => (event, sel, f, ...opts) => tap(el =>
  !isString(sel) ?
    el[method](event, sel, ...[f, ...opts]) :
  go(el,
    findAll(sel),
    each(el => el[method](event, f, ...opts)))
);

const on = baseOnOff('addEventListener');
const off = baseOnOff('removeEventListener');

const delegate = (event, sel, f) => tap(el =>
  el.addEventListener(event, e => go(
    el,
    findAll(sel),
    L.filter(el => el.contains(e.target)),
    each(currentTarget => f(defaults({ originalEvent: e, currentTarget, delegateTarget: el }, e)))
  ))
);

const me = 'MouseEvents';
const mouseEvents = {
  click: me,
  mousedown: me,
  mouseup: me,
  mousemove: me,
};

const trigger = function(event, props, el) {
  if (!el) { el = props; props = {}; }
  if (event == 'submit') return el.submit(), el;
  let e = document.createEvent(mouseEvents[event] || 'Events');
  var bubbles = true;
  for (var name in props) (name == 'bubbles') ? (bubbles = !!props[name]) : (e[name] = props[name]);
  e.initEvent(event, bubbles, true);
  el.dispatchEvent(e);
  return el;
};

const focus = el => el.focus();
const blur = el => el.blur();

const param = pipe(
  L.entries,
  L.reject(([_, a]) => isUndefined(a)),
  L.map(map(encodeURIComponent)),
  map(([k, v]) => `${k}=${v}`),
  strs => strs.join('&').replace(/%20/g, '+'));

const
  resJSON = res => res.ok ? res.json() : Promise.reject(res),

  fetchBaseOpt = {
    headers: { "Content-Type": "application/json" },
    credentials: 'same-origin'
  },

  fetchBaseOptF = headers => headers ? defaults({
    headers: defaults(headers, fetchBaseOpt.headers)
  }, fetchBaseOpt) : fetchBaseOpt,

  fetchWithBody = method => curry((url, data, headers) => go(
    fetch(url, Object.assign({
      method: method,
      body: JSON.stringify(data)
    }, fetchBaseOptF(headers))),
    resJSON));

const get = curry((url, data, headers) => go(
  fetch(url + (data === undefined ? '' : '?' + param(data)), fetchBaseOptF(headers)),
  resJSON
));

const post = fetchWithBody('POST');
const put = fetchWithBody('PUT');
const del = fetchWithBody('DELETE');

const request = {
  get,
  post,
  put,
  delete: del,
  del,
};

const ajax = curry((method, ...args) => request[(method || "").toLowerCase()](...args));

const post_form = curry((url, form_el) => go(
  new FormData(form_el),
  form => fetch(url, { method: 'POST', body: form }),
  res => res.ok ? res.json() : Promise.reject(res),
));

const dataMap = new WeakMap();

const setData = curry((data, el) => {
  dataMap.set(el, data);
  return el;
}),
  set_data = setData;

const data = el => {
  if (dataMap.has(el)) return dataMap.get(el);
  setData(JSON.parse(attr('fxd-data', el)), el);
  setAttr(['fxd-data', 'IN_WEAK_MAP'], el);
  return dataMap.get(el);
};

const toCamel = str => str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());

const css = curry(function _css(k, el) {
  return typeof k == 'string'
    ? el.style[k] || el.ownerDocument.defaultView.getComputedStyle(el, null)[toCamel(k)]
    : object(L.map(k => [k, _css(k, el)], k))
  });

const numberTypes = {
  "animationIterationCount": true,
  "columnCount": true,
  "fillOpacity": true,
  "flexGrow": true,
  "flexShrink": true,
  "fontWeight": true,
  "lineHeight": true,
  "opacity": true,
  "order": true,
  "orphans": true,
  "widows": true,
  "zIndex": true,
  "zoom": true
};

const isNumeric = n => !isNaN(parseFloat(n)) && isFinite(n);

const addPx = (k, v) => numberTypes[k] ? v : isNumeric(v) ? v + 'px' : v;

const setCss = curry(function _setCss(kv, el) {
  if (isArray(kv)) {
    const k = toCamel(kv[0]);
    el.style[k] = addPx(k, kv[1]);
  } else {
    each(kv => _setCss(kv, el), L.entries(kv));
  }
  return el;
}),
  set_css = setCss;

const docWidth = (isHeight, b = document.body) =>
  isHeight ?
    Math.max(b.offsetHeight, b.scrollHeight, docEl.offsetHeight, docEl.offsetHeight, docEl.clientHeight) :
    Math.max(b.offsetWidth, b.scrollWidth, docEl.offsetWidth, docEl.offsetWidth, docEl.clientWidth);

const cssF = (k, el) => parseFloat(css(k, el)) || 0;

const prevDisplays = new WeakMap();

const show = el => {
  if (el.style.display == 'none') el.style.display = '';
  if (css('display', el) == 'none') el.style.display = getDefaultDisplays(el);
  return el;
};

const hide = el => {
  const prev_display = css('display', el);
  if (prev_display != 'none') {
    prevDisplays.set(el, prev_display);
    el.style.display = 'none';
  }
  return el;
};

const toggle = el => css('display', el) == 'none' ? show(el) : hide(el);

function elWidth(el, prefix = '', isHeight) {
  if (isHeight) var width = 'height', Left = 'Top', Right = 'Bottom';
  else width = 'width', Left = 'Left', Right = 'Right';

  const hide = css('display', el) == 'none' && show(el);

  let res = cssF(width, el);
  const isBorderBox = css('boxSizing', el) == 'border-box';
  const borderBoxVal = (prefix && !isBorderBox) || (!prefix && isBorderBox) ?
    cssF('border'+Left+'Width', el) +
    cssF('border'+Right+'Width', el) +
    cssF('padding'+Left, el) +
    cssF('padding'+Right, el) : 0;
  res += prefix ? borderBoxVal : -borderBoxVal;
  if (prefix == 'outer') res += cssF('margin'+Left, el) + cssF('margin'+Right, el);

  hide && hide(el);

  return res;
}

const width = el => el == window ? el.innerWidth : el == document ? docWidth() : elWidth(el);
const innerWidth = el => elWidth(el, 'inner'), inner_width = innerWidth;
const outerWidth = el => elWidth(el, 'outer'), outer_width = outerWidth;

const height = el => el == window ? el.innerHeight : el == document ? docWidth(true) : elWidth(el, '', true);
const innerHeight = el => elWidth(el, 'inner', true), inner_height = innerHeight;
const outerHeight = el => elWidth(el, 'outer', true), outer_height = outerHeight;

const defaultDisplays = {};
function getDefaultDisplays(el) {
  var nodeName = el.nodeName, display = defaultDisplays[nodeName];
  if (display) return display;

  var temp, doc = el.ownerDocument;
  temp = doc.body.appendChild(doc.createElement(nodeName));
  display = css('display', temp);
  temp.parentNode.removeChild(temp);

  if (display == 'none') display = 'block';
  return defaultDisplays[nodeName] = display;
}

export {
  qs,
  qsa,
  find,
  findAll,
  children,
  closest,
  is,
  prevAll,
  nextAll,
  prev,
  next,
  contains,
  remove,
  els,
  el,
  append,
  prepend,
  before,
  after,
  text,
  setText, set_text,
  html,
  setHTML, set_html,
  outerHTML,
  setOuterHTML, set_outer_html,
  val,
  setVal, set_val,
  attr,
  setAttr, set_attr,
  removeAttr, remove_attr,
  addClass, add_class,
  removeClass, remove_class,
  toggleClass, toggle_class,
  scrollTop, scroll_top,
  scrollLeft, scroll_left,
  setScrollTop, set_scroll_top,
  setScrollLeft, set_scroll_left,
  offset,
  on,
  off,
  delegate,
  trigger,
  focus,
  blur,
  param,
  get,
  post,
  put,
  del,
  ajax,
  post_form,
  setData, set_data,
  data,
  css,
  setCss, set_css,
  width,
  innerWidth, inner_width,
  outerWidth, outer_width,
  height,
  innerHeight, inner_height,
  outerHeight, outer_height,
  show,
  hide,
  toggle,
}