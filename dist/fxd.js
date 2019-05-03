/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./qs.js
/* harmony default export */ var qs_0 = (sel => document.querySelector(sel));
// CONCATENATED MODULE: ./qsa.js
/* harmony default export */ var qsa = (sel => document.querySelectorAll(sel));
// CONCATENATED MODULE: ./node_modules/fxjs2/curry.js
function curry(f) {
  return (a, ..._) => _.length < 1 ? (..._) => f(a, ..._) : f(a, ..._);
}
// CONCATENATED MODULE: ./_baseFind.js


const idCreator = _ => {
  let i = 0;
  return _ => 'fxdom-id-' + i++;
};

const createId = idCreator();

/* harmony default export */ var _baseFind = (qs => curry((sel, el) => {
  const id = el.id;
  el.id = id || createId();
  const res = el[qs]('#' + el.id + (sel[0] == '&' ? sel.substr(1) : ' ' + sel));
  if (!id) el.removeAttribute('id');
  return res;
}));
// CONCATENATED MODULE: ./find.js


/* harmony default export */ var find = (_baseFind('querySelector'));


// CONCATENATED MODULE: ./findAll.js

/* harmony default export */ var findAll = (_baseFind('querySelectorAll'));
// CONCATENATED MODULE: ./children.js
/* harmony default export */ var children = (el => el.children);
// CONCATENATED MODULE: ./closest.js

/* harmony default export */ var closest = (curry((sel, el) => el.closest(sel)));
// CONCATENATED MODULE: ./_matches.js
const docEl = document.documentElement;
/* harmony default export */ var _matches = (docEl.matches || docEl.webkitMatchesSelector || docEl.mozMatchesSelector || docEl.msMatchesSelector);
// CONCATENATED MODULE: ./is.js



/* harmony default export */ var is = (curry((sel, el) => el && _matches.call(el, sel)));
// CONCATENATED MODULE: ./_isEl.js
/* harmony default export */ var _isEl = (node =>
  node && typeof node == 'object' && (node.nodeType == 1 || node.nodeType == 9));
// CONCATENATED MODULE: ./_nextOrPrevAll.js



/* harmony default export */ var _nextOrPrevAll = ((k, add) => function f(sel, el) {
  if (arguments.length == 1) {
    if (typeof sel == 'string') return el => f(sel, el);
    el = sel;
    sel = '*';
  }
  let res = [], cur = el;
  while ((cur = cur[k])) if (_isEl(cur) && is(sel, cur)) res[add](cur);
  return res;
});
// CONCATENATED MODULE: ./prevAll.js


/* harmony default export */ var prevAll = (_nextOrPrevAll('previousSibling', 'unshift'));
// CONCATENATED MODULE: ./nextAll.js


/* harmony default export */ var nextAll = (_nextOrPrevAll('nextSibling', 'push'));
// CONCATENATED MODULE: ./_nextOrPrev.js



/* harmony default export */ var _nextOrPrev = (k => function f(sel, el) {
  if (arguments.length == 1) {
    if (typeof sel == 'string') return el => f(sel, el);
    el = sel;
    sel = '*';
  }
  let cur = el;
  while ((cur = cur[k]) && (!_isEl(cur) || !is(sel, cur))) {}
  return cur;
});
// CONCATENATED MODULE: ./prev.js


/* harmony default export */ var prev = (_nextOrPrev('previousSibling'));
// CONCATENATED MODULE: ./next.js


/* harmony default export */ var next = (_nextOrPrev('nextSibling'));
// CONCATENATED MODULE: ./contains.js


/* harmony default export */ var contains = (curry((parent, child) => parent.contains(child)));
// CONCATENATED MODULE: ./remove.js
/* harmony default export */ var remove = (el => el.parentNode.removeChild(el));
// CONCATENATED MODULE: ./node_modules/fxjs2/go1.js
function go1(a, f) {
  return a instanceof Promise ? a.then(f) : f(a);
}
// CONCATENATED MODULE: ./node_modules/fxjs2/empty.js
/* harmony default export */ var empty = (function *() {} ());

// CONCATENATED MODULE: ./node_modules/fxjs2/toIter.js


function toIter(iterable) {
  return iterable && iterable[Symbol.iterator] ? iterable[Symbol.iterator]() : empty;
}
// CONCATENATED MODULE: ./node_modules/fxjs2/nop.js
const nop = Symbol.for('nop');

/* harmony default export */ var fxjs2_nop = (nop);
// CONCATENATED MODULE: ./node_modules/fxjs2/take.js




/* harmony default export */ var fxjs2_take = (curry(function take(l, iter) {
  if (l < 1) return [];
  let res = [];
  iter = toIter(iter);
  return function recur() {
    let cur;
    while (!(cur = iter.next()).done) {
      const a = cur.value;
      if (a instanceof Promise) {
        return a
          .then(a => (res.push(a), res).length == l ? res : recur())
          .catch(e => e == fxjs2_nop ? recur() : Promise.reject(e));
      }
      res.push(a);
      if (res.length == l) return res;
    }
    return res;
  } ();
}));
// CONCATENATED MODULE: ./node_modules/fxjs2/head.js



function head(iter) {
  return go1(fxjs2_take(1, iter), ([h]) => h);
}
// CONCATENATED MODULE: ./node_modules/fxjs2/reduce.js





const call2 = (acc, a, f) =>
  a instanceof Promise ?
    a.then(a => f(acc, a), e => e == fxjs2_nop ? acc : Promise.reject(e)) :
    f(acc, a);

function reduce(f, acc, iter) {
  if (arguments.length == 1) return (..._) => reduce(f, ..._);
  if (arguments.length == 2) return reduce(f, head(iter = toIter(acc)), iter);

  iter = toIter(iter);
  return go1(acc, function recur(acc) {
    let cur;
    while (!(cur = iter.next()).done) {
      acc = call2(acc, cur.value, f);
      if (acc instanceof Promise) return acc.then(recur);
    }
    return acc;
  });
}
// CONCATENATED MODULE: ./node_modules/fxjs2/each.js




/* harmony default export */ var fxjs2_each = (curry(function each(f, iter) {
  return go1(reduce((_, a) => f(a), null, iter), _ => iter);
}));
// CONCATENATED MODULE: ./els.js



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

/* harmony default export */ var els = (html => {
  html = html.trim();
  const name = fragmentRE.test(html) && RegExp.$1;
  const container = containers[name] || div;
  container.innerHTML = html;
  return fxjs2_each(remove, [...container.childNodes]);
});
// CONCATENATED MODULE: ./el.js



/* harmony default export */ var el_0 = (html => {
  html = html.trim();
  return html[0] == '<' ? head(els(html)) : document.createElement(html);
});
// CONCATENATED MODULE: ./append.js


/* harmony default export */ var append = (curry((parent, child) => parent.appendChild(child)));
// CONCATENATED MODULE: ./prepend.js


/* harmony default export */ var prepend = (curry((parent, child) => parent.insertBefore(child, parent.firstChild)));
// CONCATENATED MODULE: ./before.js


/* harmony default export */ var before = (curry((after, before) => after.parentNode.insertBefore(before, after)));
// CONCATENATED MODULE: ./after.js




/* harmony default export */ var after = (curry((a, b) =>
  a.nextSibling ? before(a.nextSibling, b) : append(a.parentNode, b)));
// CONCATENATED MODULE: ./text.js
/* harmony default export */ var text_0 = (el => el.textContent);
// CONCATENATED MODULE: ./setText.js


/* harmony default export */ var setText = (curry((text, el) => (el.textContent = text, el)));
// CONCATENATED MODULE: ./html.js
/* harmony default export */ var html_0 = (el => el.innerHTML);
// CONCATENATED MODULE: ./setHTML.js


/* harmony default export */ var setHTML = (curry((html, el) => (el.innerHTML = html, el)));
// CONCATENATED MODULE: ./outerHTML.js
/* harmony default export */ var outerHTML = (el => el.outerHTML);
// CONCATENATED MODULE: ./setOuterHTML.js


/* harmony default export */ var setOuterHTML = (curry((html, el) => el.outerHTML = html));
// CONCATENATED MODULE: ./val.js
/* harmony default export */ var val_0 = (el => el.value);
// CONCATENATED MODULE: ./setVal.js


/* harmony default export */ var setVal = (curry((value, el) => (el.value = value, el)));
// CONCATENATED MODULE: ./attr.js


/* harmony default export */ var attr = (curry((k, el) => el.getAttribute(k)));
// CONCATENATED MODULE: ./node_modules/fxjs2/isArray.js
const { isArray } = Array;

/* harmony default export */ var fxjs2_isArray = (isArray);
// CONCATENATED MODULE: ./node_modules/fxjs2/Lazy/entriesLazy.js
function *entriesLazy(obj) {
  for (const k in obj) yield [k, obj[k]];
}
// CONCATENATED MODULE: ./setAttr.js



/* harmony default export */ var setAttr = (curry((kv, el) => (
  fxjs2_isArray(kv)
    ? el.setAttribute(...kv)
    : fxjs2_each(kv => el.setAttribute(...kv), entriesLazy(kv)), el)));
// CONCATENATED MODULE: ./removeAttr.js


/* harmony default export */ var removeAttr = (curry((k, el) => (el.removeAttribute(k), el)));
// CONCATENATED MODULE: ./_methodClass.js


/* harmony default export */ var _methodClass = (method => curry((class_names, el) => (
  fxjs2_each(cn => el.classList[method](cn), class_names.split(' ')), el)));
// CONCATENATED MODULE: ./addClass.js


/* harmony default export */ var addClass = (_methodClass('add'));
// CONCATENATED MODULE: ./removeClass.js


/* harmony default export */ var removeClass = (_methodClass('remove'));
// CONCATENATED MODULE: ./toggleClass.js


/* harmony default export */ var toggleClass = (_methodClass('toggle'));
// CONCATENATED MODULE: ./_baseScroll.js
function baseScroll(el, val, prop, method) {
  el = el || window;
  var top = prop == "pageYOffset";
  var win = el == window || el == document ? window : null;
  if (val == undefined) return win ? win[ prop ] : el[ method ];
  if (win) win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
  else el[method] = val;
  return el;
}
// CONCATENATED MODULE: ./scrollTop.js


/* harmony default export */ var scrollTop = (el => baseScroll(el, undefined, "pageYOffset", "scrollTop"));
// CONCATENATED MODULE: ./scrollLeft.js


/* harmony default export */ var scrollLeft = (el => baseScroll(el, undefined, "pageXOffset", "scrollLeft"));
// CONCATENATED MODULE: ./setScrollTop.js


/* harmony default export */ var setScrollTop = ((val, el) => baseScroll(el, val, "pageYOffset", "scrollTop"));
// CONCATENATED MODULE: ./setScrollLeft.js


/* harmony default export */ var setScrollLeft = ((val, el) => baseScroll(el, val, "pageXOffset", "scrollLeft"));
// CONCATENATED MODULE: ./offset.js
const offset_docEl = document.documentElement;

/* harmony default export */ var offset = (el => {
  const rect = el.getBoundingClientRect();
  return {
    top: rect.top + window.pageYOffset - offset_docEl.clientTop,
    left: rect.left + window.pageXOffset - offset_docEl.clientLeft
  };
});
// CONCATENATED MODULE: ./node_modules/fxjs2/call.js
function call(a, f) {
  return f(a);
}
// CONCATENATED MODULE: ./node_modules/fxjs2/tap.js




function tap(f, ...fs) {
  return (a, ...as) => go1(reduce(call, f(a, ...as), fs), _ => a);
}
// CONCATENATED MODULE: ./node_modules/fxjs2/isString.js
function isString(a) {
  return typeof a == 'string';
}
// CONCATENATED MODULE: ./node_modules/fxjs2/go.js



function go(..._) {
  return reduce(call, _);
}
// CONCATENATED MODULE: ./_baseOnOff.js



/* harmony default export */ var _baseOnOff = (method =>
  (event, sel, f, ...opts) =>
    tap(el =>
      isString(sel)
      ? go(el, findAll(sel), fxjs2_each(el => el[method](event, f, ...opts)))
      : el[method](event, sel, ...[f, ...opts])));
// CONCATENATED MODULE: ./on.js


/* harmony default export */ var on = (_baseOnOff('addEventListener'));
// CONCATENATED MODULE: ./off.js


/* harmony default export */ var off = (_baseOnOff('removeEventListener'));
// CONCATENATED MODULE: ./node_modules/fxjs2/safety.js


function safety(a) {
  return a != null && !!a[Symbol.iterator] ? a : empty;
}
// CONCATENATED MODULE: ./node_modules/fxjs2/Lazy/mapLazy.js




/* harmony default export */ var Lazy_mapLazy = (curry(function *mapLazy(f, iter) {
  for (const a of safety(iter)) yield go1(a, f);
}));
// CONCATENATED MODULE: ./node_modules/fxjs2/baseExtend.js




function baseExtend(set, obj, objs) {
  const type = typeof obj;
  obj &&
    (type == 'object' || type == 'function') &&
      reduce(reduce(set), obj, Lazy_mapLazy(entriesLazy, objs));
  return obj;
}
// CONCATENATED MODULE: ./node_modules/fxjs2/has.js


/* harmony default export */ var has = (curry(function has(k, obj) {
  return !!(obj && obj.hasOwnProperty(k));
}));
// CONCATENATED MODULE: ./node_modules/fxjs2/defaults.js



const setter = (obj, [k, v]) => {
  return (has(k, obj) || (obj[k] = v, obj), obj);
};

function defaults(obj, ...objs) {
  return baseExtend(setter, obj, objs);
}

/* harmony default export */ var fxjs2_defaults = (defaults);
// CONCATENATED MODULE: ./node_modules/fxjs2/Lazy/filterLazy.js





/* harmony default export */ var Lazy_filterLazy = (curry(function *filterLazy(f, iter) {
  for (const a of safety(iter)) {
    const b = go1(a, f);
    if (b instanceof Promise) yield b.then(b => b ? a : Promise.reject(fxjs2_nop));
    else if (b) yield a;
  }
}));
// CONCATENATED MODULE: ./delegate.js




/* harmony default export */ var delegate = ((event, sel, f) => tap(el =>
  el.addEventListener(event, e => go(
    el,
    findAll(sel),
    Lazy_filterLazy(el => el.contains(e.target)),
    fxjs2_each(currentTarget => f(fxjs2_defaults({ originalEvent: e, currentTarget, delegateTarget: el }, e)))
  ))
));
// CONCATENATED MODULE: ./trigger.js
const me = 'MouseEvents';
const mouseEvents = {
  click: me,
  mousedown: me,
  mouseup: me,
  mousemove: me,
};

/* harmony default export */ var trigger = (function(event, props, el) {
  if (!el) { el = props; props = {}; }
  if (event == 'submit') return el.submit(), el;
  let e = document.createEvent(mouseEvents[event] || 'Events');
  var bubbles = true;
  for (var name in props) (name == 'bubbles') ? (bubbles = !!props[name]) : (e[name] = props[name]);
  e.initEvent(event, bubbles, true);
  el.dispatchEvent(e);
  return el;
});;
// CONCATENATED MODULE: ./focus.js
/* harmony default export */ var focus_0 = (el => el.focus());
// CONCATENATED MODULE: ./blur.js
/* harmony default export */ var blur_0 = (el => el.blur());
// CONCATENATED MODULE: ./node_modules/fxjs2/pipe.js



function pipe(f, ...fs) {
  return (...as) => reduce(call, f(...as), fs);
}
// CONCATENATED MODULE: ./node_modules/fxjs2/isUndefined.js
/* harmony default export */ var isUndefined = (a => a === undefined);
// CONCATENATED MODULE: ./node_modules/fxjs2/takeAll.js


function takeAll(iter) {
  return fxjs2_take(Infinity, iter);
}
// CONCATENATED MODULE: ./node_modules/fxjs2/map.js




/* harmony default export */ var fxjs2_map = (curry(function map(f, iter) {
  return takeAll(Lazy_mapLazy(f, iter));
}));
// CONCATENATED MODULE: ./node_modules/fxjs2/not.js
function not(a) {
  return !a;
}
// CONCATENATED MODULE: ./node_modules/fxjs2/Lazy/rejectLazy.js





/* harmony default export */ var Lazy_rejectLazy = (curry(function rejectLazy(f, iter) {
  return Lazy_filterLazy(a => go1(f(a), not), iter);
}));
// CONCATENATED MODULE: ./param.js






/* harmony default export */ var param = (pipe(
  entriesLazy,
  Lazy_rejectLazy(([_, a]) => isUndefined(a)),
  Lazy_mapLazy(fxjs2_map(encodeURIComponent)),
  fxjs2_map(([k, v]) => `${k}=${v}`),
  strs => strs.join('&').replace(/%20/g, '+')));
// CONCATENATED MODULE: ./_fetchBaseOptF.js


const fetchBaseOpt = {
  headers: { "Content-Type": "application/json" },
  credentials: 'same-origin'
};

/* harmony default export */ var _fetchBaseOptF = (headers =>
  headers
    ? fxjs2_defaults(
        {
          headers: fxjs2_defaults(headers, fetchBaseOpt.headers)
        },
        fetchBaseOpt)
    : fetchBaseOpt);

  
// CONCATENATED MODULE: ./_resJSON.js
/* harmony default export */ var _resJSON = (res => res.ok ? res.json() : Promise.reject(res));
// CONCATENATED MODULE: ./get.js





/* harmony default export */ var get = (curry((url, data, headers) => go(
  fetch(url + (data === undefined ? '' : '?' + param(data)), _fetchBaseOptF(headers)),
  _resJSON
)));
// CONCATENATED MODULE: ./_fetchWithBody.js




/* harmony default export */ var _fetchWithBody = (method => curry((url, data, headers) => go(
    fetch(url, Object.assign({
      method,
      body: JSON.stringify(data)
    }, _fetchBaseOptF(headers))),
    _resJSON)));
// CONCATENATED MODULE: ./post.js


/* harmony default export */ var post = (_fetchWithBody('POST'));
// CONCATENATED MODULE: ./put.js


/* harmony default export */ var put = (_fetchWithBody('PUT'));
// CONCATENATED MODULE: ./del.js


/* harmony default export */ var del = (_fetchWithBody('DELETE'));
// CONCATENATED MODULE: ./postForm.js


/* harmony default export */ var postForm = (curry((url, form_el) => go(
  new FormData(form_el),
  form => fetch(url, { method: 'POST', body: form }),
  res => res.ok ? res.json() : Promise.reject(res)
)));
// CONCATENATED MODULE: ./_dataMap.js
/* harmony default export */ var _dataMap = (new WeakMap());
// CONCATENATED MODULE: ./setData.js



/* harmony default export */ var setData = (curry((data, el) => {
  _dataMap.set(el, data);
  return el;
}));
// CONCATENATED MODULE: ./data.js





/* harmony default export */ var data_0 = (el => {
  if (_dataMap.has(el)) return _dataMap.get(el);
  setData(JSON.parse(attr('fxd-data', el)), el);
  setAttr(['fxd-data', 'IN_WEAK_MAP'], el);
  return _dataMap.get(el);
});
// CONCATENATED MODULE: ./node_modules/fxjs2/object.js


function object(iter) {
  return reduce((obj, [k, v]) => (obj[k] = v, obj), {}, iter);
}
// CONCATENATED MODULE: ./_toCamel.js
/* harmony default export */ var _toCamel = (str => str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase()));
// CONCATENATED MODULE: ./css.js




/* harmony default export */ var css_0 = (curry(function _css(k, el) {
  return typeof k == 'string'
    ? el.style[k] || el.ownerDocument.defaultView.getComputedStyle(el, null)[_toCamel(k)]
    : object(Lazy_mapLazy(k => [k, _css(k, el)], k))
}));
// CONCATENATED MODULE: ./_isNumeric.js
/* harmony default export */ var _isNumeric = (n => !isNaN(parseFloat(n)) && isFinite(n));
// CONCATENATED MODULE: ./_addPx.js


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

/* harmony default export */ var _addPx = ((k, v) => numberTypes[k] ? v : _isNumeric(v) ? v + 'px' : v);
// CONCATENATED MODULE: ./setCss.js





/* harmony default export */ var setCss = (curry(function _setCss(kv, el) {
  if (fxjs2_isArray(kv)) {
    const k = _toCamel(kv[0]);
    el.style[k] = _addPx(k, kv[1]);
  } else {
    fxjs2_each(kv => _setCss(kv, el), entriesLazy(kv));
  }
  return el;
}));
// CONCATENATED MODULE: ./_docWidth.js
const _docWidth_docEl = document.documentElement;

/* harmony default export */ var _docWidth = ((isHeight, b = document.body) =>
  isHeight
    ? Math.max(b.offsetHeight, b.scrollHeight, _docWidth_docEl.offsetHeight, _docWidth_docEl.offsetHeight, _docWidth_docEl.clientHeight)
    : Math.max(b.offsetWidth, b.scrollWidth, _docWidth_docEl.offsetWidth, _docWidth_docEl.offsetWidth, _docWidth_docEl.clientWidth));
// CONCATENATED MODULE: ./width.js


/* harmony default export */ var width_0 = (el => el == window ? el.innerWidth : el == document ? _docWidth() : elWidth(el));
// CONCATENATED MODULE: ./_cssF.js


/* harmony default export */ var _cssF = ((k, el) => parseFloat(css_0(k, el)) || 0);
// CONCATENATED MODULE: ./_getDefaultDisplays.js
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
// CONCATENATED MODULE: ./show.js



/* harmony default export */ var show = (el => {
  if (el.style.display == 'none') el.style.display = '';
  if (css_0('display', el) == 'none') el.style.display = getDefaultDisplays(el);
  return el;
});
// CONCATENATED MODULE: ./elWidth.js




function elWidth_elWidth(el, prefix = '', isHeight) {
  if (isHeight) var width = 'height', Left = 'Top', Right = 'Bottom';
  else width = 'width', Left = 'Left', Right = 'Right';

  const hide = css_0('display', el) == 'none' && show(el);

  let res = _cssF(width, el);
  const isBorderBox = css_0('boxSizing', el) == 'border-box';
  const borderBoxVal = (prefix && !isBorderBox) || (!prefix && isBorderBox) ?
    _cssF('border'+Left+'Width', el) +
    _cssF('border'+Right+'Width', el) +
    _cssF('padding'+Left, el) +
    _cssF('padding'+Right, el) : 0;
  res += prefix ? borderBoxVal : -borderBoxVal;
  if (prefix == 'outer') res += _cssF('margin'+Left, el) + _cssF('margin'+Right, el);

  hide && hide(el);

  return res;
}
// CONCATENATED MODULE: ./innerWidth.js


/* harmony default export */ var innerWidth_0 = (el => elWidth_elWidth(el, 'inner'));
// CONCATENATED MODULE: ./outerWidth.js


/* harmony default export */ var outerWidth_0 = (el => elWidth_elWidth(el, 'outer'));
// CONCATENATED MODULE: ./height.js



/* harmony default export */ var height = (el => el == window ? el.innerHeight : el == document ? _docWidth(true) : elWidth_elWidth(el, '', true));
// CONCATENATED MODULE: ./innerHeight.js


/* harmony default export */ var innerHeight_0 = (el => elWidth_elWidth(el, 'inner', true));
// CONCATENATED MODULE: ./outerHeight.js


/* harmony default export */ var outerHeight_0 = (el => elWidth_elWidth(el, 'outer', true));
// CONCATENATED MODULE: ./hide.js


const prevDisplays = new WeakMap();

/* harmony default export */ var hide_0 = (el => {
  const prev_display = css_0('display', el);
  if (prev_display != 'none') {
    prevDisplays.set(el, prev_display);
    el.style.display = 'none';
  }
  return el;
});
// CONCATENATED MODULE: ./toggle.js




/* harmony default export */ var toggle = (el => css_0('display', el) == 'none' ? show(el) : hide_0(el));
// CONCATENATED MODULE: ./fxjs-dom.js
// FxJS-DOM 0.0.16
































































window.$ = {};

$.qs = qs_0;
$.qsa = qsa;
$.find = find;
$.findAll = findAll;
$.children = children;
$.closest = closest;
$.is = is;
$.prevAll = prevAll;
$.nextAll = nextAll;
$.prev = prev;
$.next = next;
$.contains = contains;
$.remove = remove;
$.els = els;
$.el = el_0;
$.append = append;
$.prepend = prepend;
$.before = before;
$.after = after;
$.text = text_0;
$.setText = $.set_text = setText;
$.html = html_0;
$.setHTML = $.set_html = setHTML;
$.outerHTML = outerHTML;
$.setOuterHTML = $.set_outer_html = setOuterHTML;
$.val = val_0;
$.setVal = $.set_val = setVal;
$.attr = attr;
$.setAttr = $.set_attr = setAttr;
$.removeAttr = $.remove_attr = removeAttr;
$.addClass = $.add_class = addClass;
$.removeClass = $.remove_class = removeClass;
$.toggleClass = $.toggle_class = toggleClass;
$.scrollTop = $.scroll_top = scrollTop;
$.scrollLeft = $.scroll_left = scrollLeft;
$.setScrollTop = $.set_scroll_top = setScrollTop;
$.setScrollLeft = $.set_scroll_left = setScrollLeft;
$.offset = offset;
$.on = on;
$.off = off;
$.delegate = delegate;
$.trigger = trigger;
$.focus = focus_0;
$.blur = blur_0;
$.param = param;
$.get = get;
$.post = post;
$.put = put;
$.del = del;
$.postForm = $.post_form = postForm;
$.setData = $.set_data = setData;
$.data = data_0;
$.css = css_0;
$.setCss = $.set_css = setCss;
$.width = width_0;
$.innerWidth = $.inner_width = innerWidth_0;
$.outerWidth = $.outer_width = outerWidth_0;
$.height = height;
$.innerHeight = $.inner_height = innerHeight_0;
$.outerHeight = $.outer_height = outerHeight_0;
$.show = show;
$.hide = hide_0;
$.toggle = toggle;


/***/ })
/******/ ]);
//# sourceMappingURL=fxd.js.map