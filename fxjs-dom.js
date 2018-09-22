import {
  isUndefined, isArray, isString,
  curry, go, pipe, tap,
  identity, head,
  each, map,
  defaults,
  L
} from "./fx.js";

const $ = sel => document.querySelector(sel);

$.all = sel => document.querySelectorAll(sel);
export default $;

$.find = curry((sel, el) => el.querySelector(sel));

$.findAll = curry((sel, el) => el.querySelectorAll(sel));

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

$.setAttr = $.set_attr = curry((kv, el) =>
  isArray(kv) ?
    el.setAttribute(...kv) :
    each(kv => el.setAttribute(...kv), L.entries(kv)));

$.on = (el, event, sel, f, ...opts) =>
  isString(el) ? // curry
    el => $.on(el, ...arguments) :
  !isString(sel) ? (
    el.addEventListener(event, sel, f, ...opts), el) :
  go(el, tap(
    $.findAll(sel),
    each(el => el.addEventListener(event, sel, f, ...opts))));

$.delegate = (el, event, sel, f, capture) =>
  isString(el) ? // curry
    el => $.delegate(el, ...arguments) : (
    el.addEventListener(event, e => go(
      el,
      $.findAll(sel),
      (typeof capture == 'object' ? capture.capture : capture) ? identity : L.reverse,
      L.filter(el => el.contains(e.target)),
      each(currentTarget => f(defaults({ originalEvent: e, currentTarget, delegateTarget: el }, e)))
    )), el);

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