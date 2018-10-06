// FxJS-DOM 0.0.4
import {
  isUndefined, isArray, isString,
  identity, head, tail,
  curry, go, pipe, tap,
  each, map, filter,
  defaults,
  L
} from "./fx.js";

const $ = sel => document.querySelector(sel);

$.all = sel => document.querySelectorAll(sel);
export default $;

const childrenRecur = (parents, sels) => {
  const [h1, ...t1] = sels;
  if (h1 != '>') return [parents, t1];
  const [h2, ...t2] = t1;
  return go(
    parents,
    map(pipe(
      $.children,
      filter($.is(h2))
    )),
    arr => [].concat(...arr),
    children => childrenRecur(children, tail(t2)));
};

const idCreator = _ => {
  var i = 0;
  return _ => 'fxdom-id-' + i++;
};

const createId = idCreator();

const baseFind = qs => curry((sel, el) => {
  const id = el.id;
  el.id = id || createId();
  const res = el[qs]('#' + el.id + ' ' + sel);
  if (!id) el.removeAttribute('id');
  return res;
});

$.find = baseFind('querySelector');

$.findAll = baseFind('querySelectorAll');

$.children = el => el.children;

const docEl = document.documentElement;
const matches = docEl.matches || docEl.webkitMatchesSelector || docEl.mozMatchesSelector || docEl.msMatchesSelector;

$.is = curry((sel, el) => matches.call(el, sel));

$.closest = curry((sel, el) => el.closest(sel));

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

$.val = el => el.value;

$.setVal = $.set_val = curry((value, el) => (el.value = value, el));

$.attr = curry((k, el) => el.getAttribute(k));

$.setAttr = $.set_attr = curry((kv, el) => (
  isArray(kv) ?
    el.setAttribute(...kv) :
    each(kv => el.setAttribute(...kv), L.entries(kv)), el));

$.removeAttr = $.remove_attr = curry((k, el) => el.removeAttribute(k));

$.on = function(el, event, sel, f, ...opts) {
  return isString(el) ? // curry
    el => $.on(el, ...arguments) :
  !isString(sel) ? (
    el.addEventListener(event, sel, f, ...opts), el) :
  go(el, tap(
    $.findAll(sel),
    each(el => el.addEventListener(event, f, ...opts))))
};

$.delegate = function(el, event, sel, f, capture) {
  return isString(el) ? // curry
    el => $.delegate(el, ...arguments) : (
    el.addEventListener(event, e => go(
      el,
      $.findAll(sel),
      (typeof capture == 'object' ? capture.capture : capture) ? identity : L.reverse,
      L.filter(el => el.contains(e.target)),
      each(currentTarget => f(defaults({ originalEvent: e, currentTarget, delegateTarget: el }, e)))
    )), el)
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
  fetch(url + '?' + $.param(data), fetchBaseOpt),
  resJSON
));

$.post = fetchWithBody('POST');
$.put = fetchWithBody('PUT');
$.delete = fetchWithBody('DELETE');

$.param = pipe(
  L.entries,
  L.reject((_, a) => isUndefined(a)),
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