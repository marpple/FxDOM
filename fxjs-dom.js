// FxJS-DOM 0.0.6
import {
  isUndefined, isArray, isString,
  head,
  curry, go, pipe, tap,
  each, map,
  defaults,
  L
} from "./fx.js";

const $ = sel => document.querySelector(sel);

$.all = sel => document.querySelectorAll(sel);
export default $;

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

$.find = baseFind('querySelector');

$.findAll = baseFind('querySelectorAll');

$.closest = curry((sel, el) => el.closest(sel));

const docEl = document.documentElement;
const matches = docEl.matches || docEl.webkitMatchesSelector || docEl.mozMatchesSelector || docEl.msMatchesSelector;

$.is = curry((sel, el) => matches.call(el, sel));

$.els = htmlStr => {
  const container = document.createElement('div');
  container.innerHTML = htmlStr;
  return container.children;
};

$.el = pipe($.els, head);

$.append = curry((parent, child) => parent.appendChild(child));

$.prepend = curry((parent, child) => parent.insertBefore(child, parent.firstChild));

$.remove = el => el.parentNode.removeChild(el);

$.text = el => el.textContent;

$.setText = $.set_text = curry((text, el) => (el.textContent = text, el));

$.html = el => el.innerHTML;

$.setHtml = $.set_html = curry((html, el) => (el.innerHTML = html, el));

$.outerHTML = el => el.outerHTML;

$.setOuterHTML = $.set_outer_html = curry((html, el) => el.outerHTML = html);

$.val = el => el.value;

$.setVal = $.set_val = curry((value, el) => (el.value = value, el));

$.attr = curry((k, el) => el.getAttribute(k));

$.setAttr = $.set_attr = curry((kv, el) => (
  isArray(kv) ?
    el.setAttribute(...kv) :
    each(kv => el.setAttribute(...kv), L.entries(kv)), el));

$.removeAttr = $.remove_attr = curry((k, el) => (el.removeAttribute(k), el));

const baseOnOff = method => (event, sel, f, ...opts) => tap(el =>
  !isString(sel) ?
    el[method](event, sel, ...[f, ...opts]) :
  go(el,
    $.findAll(sel),
    each(el => el[method](event, f, ...opts)))
);

$.on = baseOnOff('addEventListener');
$.off = baseOnOff('removeEventListener');

$.delegate = (event, sel, f) => tap(el =>
  el.addEventListener(event, e => go(
    el,
    $.findAll(sel),
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

$.trigger = function(event, props, el) {
  if (!el) { el = props; props = {}; }
  if (event == 'submit') return el.submit(), el;
  let e = document.createEvent(mouseEvents[event] || 'Events');
  var bubbles = true;
  for (var name in props) (name == 'bubbles') ? (bubbles = !!props[name]) : (event[name] = props[name]);
  e.initEvent(event, bubbles, true);
  el.dispatchEvent(e);
  return el;
};

const
  resJSON = res => res.ok ? res.json() : Promise.reject(res),

  fetchBaseOpt = {
    headers: { "Content-Type": "application/json" },
    credentials: 'same-origin'
  },

  fetchWithBody = method => curry((url, data) => go(
    fetch(url, Object.assign({
      method: method,
      body: JSON.stringify(data)
    }, fetchBaseOpt)),
    resJSON));

$.get = curry((url, data) => go(
  fetch(url + (data === undefined ? '' : '?' + $.param(data)), fetchBaseOpt),
  resJSON
));

$.post = fetchWithBody('POST');
$.put = fetchWithBody('PUT');
$.delete = fetchWithBody('DELETE');

$.param = pipe(
  L.entries,
  L.reject(([_, a]) => isUndefined(a)),
  L.map(map(encodeURIComponent)),
  map(([k, v]) => `${k}=${v}`),
  strs => strs.join('&').replace(/%20/g, '+'));

const dataMap = new WeakMap();

$.setData = (data, el) => {
  dataMap.set(el, data);
  return el;
};

$.data = el => {
  if (dataMap.has(el)) return dataMap.get(el);
  $.setData(JSON.parse($.attr('fxd-data', el)), el);
  $.setAttr(['fxd-data', 'IN_WEAK_MAP'], el);
  return dataMap.get(el);
};