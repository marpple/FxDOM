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
var _index_namespaceObject = {};
__webpack_require__.r(_index_namespaceObject);
__webpack_require__.d(_index_namespaceObject, "qs", function() { return qs_0; });
__webpack_require__.d(_index_namespaceObject, "qsa", function() { return qsa; });
__webpack_require__.d(_index_namespaceObject, "find", function() { return find; });
__webpack_require__.d(_index_namespaceObject, "findAll", function() { return findAll; });
__webpack_require__.d(_index_namespaceObject, "children", function() { return children; });
__webpack_require__.d(_index_namespaceObject, "closest", function() { return closest; });
__webpack_require__.d(_index_namespaceObject, "is", function() { return is; });
__webpack_require__.d(_index_namespaceObject, "siblings", function() { return siblings; });
__webpack_require__.d(_index_namespaceObject, "prevAll", function() { return prevAll; });
__webpack_require__.d(_index_namespaceObject, "nextAll", function() { return nextAll; });
__webpack_require__.d(_index_namespaceObject, "prev", function() { return prev; });
__webpack_require__.d(_index_namespaceObject, "next", function() { return next; });
__webpack_require__.d(_index_namespaceObject, "contains", function() { return contains; });
__webpack_require__.d(_index_namespaceObject, "remove", function() { return remove; });
__webpack_require__.d(_index_namespaceObject, "els", function() { return els; });
__webpack_require__.d(_index_namespaceObject, "el", function() { return el_0; });
__webpack_require__.d(_index_namespaceObject, "appendTo", function() { return appendTo; });
__webpack_require__.d(_index_namespaceObject, "prependTo", function() { return prependTo; });
__webpack_require__.d(_index_namespaceObject, "append", function() { return append; });
__webpack_require__.d(_index_namespaceObject, "prepend", function() { return prepend; });
__webpack_require__.d(_index_namespaceObject, "before", function() { return before; });
__webpack_require__.d(_index_namespaceObject, "after", function() { return after; });
__webpack_require__.d(_index_namespaceObject, "text", function() { return text_0; });
__webpack_require__.d(_index_namespaceObject, "setText", function() { return setText; });
__webpack_require__.d(_index_namespaceObject, "html", function() { return html_0; });
__webpack_require__.d(_index_namespaceObject, "setHTML", function() { return setHTML; });
__webpack_require__.d(_index_namespaceObject, "outerHTML", function() { return outerHTML; });
__webpack_require__.d(_index_namespaceObject, "setOuterHTML", function() { return setOuterHTML; });
__webpack_require__.d(_index_namespaceObject, "val", function() { return val_0; });
__webpack_require__.d(_index_namespaceObject, "setVal", function() { return setVal; });
__webpack_require__.d(_index_namespaceObject, "attr", function() { return attr; });
__webpack_require__.d(_index_namespaceObject, "setAttr", function() { return setAttr; });
__webpack_require__.d(_index_namespaceObject, "removeAttr", function() { return removeAttr; });
__webpack_require__.d(_index_namespaceObject, "addClass", function() { return addClass; });
__webpack_require__.d(_index_namespaceObject, "removeClass", function() { return removeClass; });
__webpack_require__.d(_index_namespaceObject, "toggleClass", function() { return toggleClass; });
__webpack_require__.d(_index_namespaceObject, "hasClass", function() { return hasClass; });
__webpack_require__.d(_index_namespaceObject, "scrollTop", function() { return scrollTop; });
__webpack_require__.d(_index_namespaceObject, "scrollLeft", function() { return scrollLeft; });
__webpack_require__.d(_index_namespaceObject, "setScrollTop", function() { return setScrollTop; });
__webpack_require__.d(_index_namespaceObject, "setScrollLeft", function() { return setScrollLeft; });
__webpack_require__.d(_index_namespaceObject, "offset", function() { return offset; });
__webpack_require__.d(_index_namespaceObject, "offsetParent", function() { return offsetParent_offsetParent; });
__webpack_require__.d(_index_namespaceObject, "position", function() { return position; });
__webpack_require__.d(_index_namespaceObject, "on", function() { return on; });
__webpack_require__.d(_index_namespaceObject, "off", function() { return off; });
__webpack_require__.d(_index_namespaceObject, "delegate", function() { return delegate; });
__webpack_require__.d(_index_namespaceObject, "trigger", function() { return trigger; });
__webpack_require__.d(_index_namespaceObject, "focus", function() { return focus_0; });
__webpack_require__.d(_index_namespaceObject, "blur", function() { return blur_0; });
__webpack_require__.d(_index_namespaceObject, "param", function() { return param; });
__webpack_require__.d(_index_namespaceObject, "get", function() { return get; });
__webpack_require__.d(_index_namespaceObject, "post", function() { return post; });
__webpack_require__.d(_index_namespaceObject, "put", function() { return put; });
__webpack_require__.d(_index_namespaceObject, "del", function() { return del; });
__webpack_require__.d(_index_namespaceObject, "postForm", function() { return postForm; });
__webpack_require__.d(_index_namespaceObject, "setData", function() { return setData; });
__webpack_require__.d(_index_namespaceObject, "data", function() { return data_0; });
__webpack_require__.d(_index_namespaceObject, "dataStr", function() { return dataStr; });
__webpack_require__.d(_index_namespaceObject, "css", function() { return css; });
__webpack_require__.d(_index_namespaceObject, "setCss", function() { return setCss; });
__webpack_require__.d(_index_namespaceObject, "width", function() { return width_0; });
__webpack_require__.d(_index_namespaceObject, "innerWidth", function() { return innerWidth_0; });
__webpack_require__.d(_index_namespaceObject, "outerWidth", function() { return outerWidth_0; });
__webpack_require__.d(_index_namespaceObject, "height", function() { return height; });
__webpack_require__.d(_index_namespaceObject, "innerHeight", function() { return innerHeight_0; });
__webpack_require__.d(_index_namespaceObject, "outerHeight", function() { return outerHeight_0; });
__webpack_require__.d(_index_namespaceObject, "show", function() { return show; });
__webpack_require__.d(_index_namespaceObject, "hide", function() { return hide; });
__webpack_require__.d(_index_namespaceObject, "toggle", function() { return toggle; });

// CONCATENATED MODULE: ./qs.js
/* harmony default export */ var qs_0 = (sel => document.querySelector(sel));
// CONCATENATED MODULE: ./qsa.js
/* harmony default export */ var qsa = (sel => document.querySelectorAll(sel));
// CONCATENATED MODULE: ./node_modules/fxjs2/Strict/curry.js
function curry(f) {
  return (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);
}
// CONCATENATED MODULE: ./.internal/_baseFind.js


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
// CONCATENATED MODULE: ./.internal/_matches.js
const docEl = document.documentElement;
/* harmony default export */ var _matches = (docEl.matches || docEl.webkitMatchesSelector || docEl.mozMatchesSelector || docEl.msMatchesSelector);
// CONCATENATED MODULE: ./is.js



/* harmony default export */ var is = (curry((sel, el) => el && _matches.call(el, sel)));
// CONCATENATED MODULE: ./.internal/_isEl.js
/* harmony default export */ var _isEl = (node =>
  node && typeof node == 'object' && (node.nodeType == 1 || node.nodeType == 9));
// CONCATENATED MODULE: ./.internal/_nextOrPrevAll.js



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
// CONCATENATED MODULE: ./nextAll.js


/* harmony default export */ var nextAll = (_nextOrPrevAll('nextSibling', 'push'));
// CONCATENATED MODULE: ./prevAll.js


/* harmony default export */ var prevAll = (_nextOrPrevAll('previousSibling', 'unshift'));
// CONCATENATED MODULE: ./siblings.js



function siblings(...args) {
  return [...prevAll(...args), ...nextAll(...args)];
};

// CONCATENATED MODULE: ./.internal/_nextOrPrev.js



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
// CONCATENATED MODULE: ./node_modules/fxjs2/Strict/go1.js
/* harmony default export */ var go1 = ((a, f) => a instanceof Promise ? a.then(f) : f(a));
// CONCATENATED MODULE: ./node_modules/fxjs2/Lazy/emptyL.js
const emptyIter = (function *() {} ());
function emptyL() { return emptyIter; };

// CONCATENATED MODULE: ./node_modules/fxjs2/Strict/toIter.js


function toIter(iterable) {
  return iterable && iterable[Symbol.iterator] ? iterable[Symbol.iterator]() : emptyL();
}
// CONCATENATED MODULE: ./node_modules/fxjs2/Lazy/mapL.js




/* harmony default export */ var Lazy_mapL = (curry(function* mapL(f, iter) {
  for (const a of toIter(iter)) yield go1(a, f);
}));
// CONCATENATED MODULE: ./node_modules/fxjs2/Strict/nop.js
const nop = Symbol.for('nop');
/* harmony default export */ var Strict_nop = (nop);
// CONCATENATED MODULE: ./node_modules/fxjs2/Strict/take.js




/* harmony default export */ var Strict_take = (curry(function take(l, iter) {
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
          .catch(e => e == Strict_nop ? recur() : Promise.reject(e));
      }
      res.push(a);
      if (res.length == l) return res;
    }
    return res;
  } ();
}));
// CONCATENATED MODULE: ./node_modules/fxjs2/Strict/takeAll.js


function takeAll(iter) {
  return Strict_take(Infinity, iter);
}
// CONCATENATED MODULE: ./node_modules/fxjs2/Strict/map.js




/* harmony default export */ var Strict_map = (curry(function map(f, iter) {
  return takeAll(Lazy_mapL(f, iter));
}));
// CONCATENATED MODULE: ./node_modules/fxjs2/Strict/each.js




/* harmony default export */ var Strict_each = (curry(function each(f, iter) {
  return Strict_map(a => go1(f(a), _ => a), iter);
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
  return Strict_each(remove, [...container.childNodes]);
});
// CONCATENATED MODULE: ./node_modules/fxjs2/Strict/head.js



function head(iter) {
  return go1(Strict_take(1, iter), ([h]) => h);
}
// CONCATENATED MODULE: ./el.js



/* harmony default export */ var el_0 = (html => {
  html = html.trim();
  return html[0] == '<' ? head(els(html)) : document.createElement(html);
});
// CONCATENATED MODULE: ./appendTo.js


/* harmony default export */ var appendTo = (curry((parent, child) => parent.appendChild(child)));
// CONCATENATED MODULE: ./prependTo.js


/* harmony default export */ var prependTo = (curry((parent, child) => parent.insertBefore(child, parent.firstChild)));
// CONCATENATED MODULE: ./append.js


/* harmony default export */ var append = (curry((child, parent) => parent.appendChild(child)));
// CONCATENATED MODULE: ./prepend.js


/* harmony default export */ var prepend = (curry((child, parent) => parent.insertBefore(child, parent.firstChild)));
// CONCATENATED MODULE: ./before.js


/* harmony default export */ var before = (curry((el, newEl) => el.parentNode.insertBefore(newEl, el)));
// CONCATENATED MODULE: ./after.js




/* harmony default export */ var after = (curry((el, newEl) =>
  el.nextSibling ? before(el.nextSibling, newEl) : appendTo(el.parentNode, newEl)));
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
// CONCATENATED MODULE: ./node_modules/fxjs2/Strict/isArray.js
const { isArray } = Array;
/* harmony default export */ var Strict_isArray = (isArray);
// CONCATENATED MODULE: ./node_modules/fxjs2/Lazy/entriesL.js
function* entriesL(obj) {
  for (const k in obj) yield [k, obj[k]];
}
// CONCATENATED MODULE: ./setAttr.js



/* harmony default export */ var setAttr = (curry((kv, el) => (
  Strict_isArray(kv)
    ? el.setAttribute(...kv)
    : Strict_each(kv => el.setAttribute(...kv), entriesL(kv)), el)));
// CONCATENATED MODULE: ./removeAttr.js


/* harmony default export */ var removeAttr = (curry((k, el) => (el.removeAttribute(k), el)));
// CONCATENATED MODULE: ./.internal/_methodClass.js


/* harmony default export */ var _methodClass = (method => curry((class_names, el) => (
  Strict_each(cn => el.classList[method](cn), class_names.split(' ')), el)));
// CONCATENATED MODULE: ./addClass.js


/* harmony default export */ var addClass = (_methodClass('add'));
// CONCATENATED MODULE: ./removeClass.js


/* harmony default export */ var removeClass = (_methodClass('remove'));
// CONCATENATED MODULE: ./toggleClass.js


/* harmony default export */ var toggleClass = (_methodClass('toggle'));
// CONCATENATED MODULE: ./hasClass.js


/* harmony default export */ var hasClass = (curry((class_name, el) => el.classList.contains(class_name)));

// CONCATENATED MODULE: ./.internal/_baseScroll.js
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
// CONCATENATED MODULE: ./node_modules/fxjs2/.internal/go2.js


function go2(acc, a, f){
  return a instanceof Promise ?
    a.then(a => f(acc, a), e => e == Strict_nop ? acc : Promise.reject(e)) :
    f(acc, a);
}
// CONCATENATED MODULE: ./node_modules/fxjs2/Strict/reduce.js





function reduce(f, acc, iter) {
  if (arguments.length == 1) return (..._) => reduce(f, ..._);
  if (arguments.length == 2) return reduce(f, head(iter = toIter(acc)), iter);

  iter = toIter(iter);
  return go1(acc, function recur(acc) {
    let cur;
    while (!(cur = iter.next()).done) {
      acc = go2(acc, cur.value, f);
      if (acc instanceof Promise) return acc.then(recur);
    }
    return acc;
  });
}
// CONCATENATED MODULE: ./node_modules/fxjs2/Strict/object.js


function object(iter) {
  return reduce((obj, [k, v]) => (obj[k] = v, obj), {}, iter);
}
// CONCATENATED MODULE: ./.internal/_toCamel.js
/* harmony default export */ var _toCamel = (str => str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase()));
// CONCATENATED MODULE: ./css.js




/* harmony default export */ var css = (curry(function _css(k, el) {
  return typeof k == 'string'
    ? el.style[k] || el.ownerDocument.defaultView.getComputedStyle(el, null)[_toCamel(k)]
    : object(Lazy_mapL(k => [k, _css(k, el)], k))
}));
// CONCATENATED MODULE: ./offsetParent.js

const offsetParent_docEl = document.documentElement;

function offsetParent_offsetParent(el) {
  let offsetParent = el;
  while ((offsetParent = offsetParent.offsetParent) && css('position', offsetParent) === 'static') {}
  return offsetParent || offsetParent_docEl;
}

// CONCATENATED MODULE: ./position.js




const position_docEl = document.documentElement;

const setPositionTopLeft = (el, { top, left }, { pTop = 0, pLeft = 0 }) => ({
  top: top - pTop - parseFloat(css('marginTop', el)) + position_docEl.clientTop,
  left: left - pLeft - parseFloat(css('marginLeft', el)) + position_docEl.clientLeft
});

/* harmony default export */ var position = (el => {
  if (css('position', el) === 'fixed')
    return setPositionTopLeft(el, el.getBoundingClientRect(), {});
  const { top, left } = offset(el);
  const offsetParent$ = offsetParent_offsetParent(el);
  const { clientTop, clientLeft } = offsetParent$;
  if (offsetParent$.nodeName.toUpperCase() === 'HTML')
    return setPositionTopLeft(el, { top, left }, { pTop: clientTop, pLeft: clientLeft });
  const { top: pTop, left: pLeft } = offset(offsetParent$)
  return setPositionTopLeft(el, { top, left }, { pTop: pTop + clientTop, pLeft: pLeft + clientLeft });
});

//
// export default el => go(
//     extend(...(css('position', el) === 'fixed' ?
//       [
//         { pTop: 0, pLeft: 0 }, el.getBoundingClientRect()
//       ] : [
//         offset(el),
//         go(
//           offsetParent(el),
//           offsetParent$ => [
//             offsetParent$.nodeName.toUpperCase() !== 'HTML' ?
//             offset(offsetParent$) : { top: 0, left: 0 },
//             offsetParent$
//           ],
//           ([{ top, left }, { clientTop, clientLeft }]) => ({
//             pTop: top + clientTop,
//             pLeft: left + clientLeft
//           })
//         )
//       ]
//     )),
//     ({ top, left, pTop, pLeft }) => ({
//       top: top - pTop - parseFloat(css('marginTop', el)) + docEl.clientTop,
//       left: left - pLeft - parseFloat(css('marginLeft', el)) + docEl.clientLeft
//     })
//   );
//
//
// export default el => {
//   const {
//     offset: { top, left }, pTop = 0, pLeft = 0
//   } = css('position', el) === 'fixed' ?
//     {
//       offset: el.getBoundingClientRect(),
//     } : go(
//       offsetParent(el),
//       offsetParent$ => {
//         const [{ top = 0, left = 0 }, { clientTop, clientLeft }] = [
//           offsetParent$.nodeName.toUpperCase() !== 'HTML' ? offset(offsetParent$) : {},
//           offsetParent$
//         ];
//         return {
//           offset: offset(el), pTop: top + clientTop, pLeft: left + clientLeft
//         };
//       }
//     );
//   return {
//     top: top - pTop - parseFloat(css('marginTop', el)) + docEl.clientTop,
//     left: left - pLeft - parseFloat(css('marginLeft', el)) + docEl.clientLeft
//   };
// }
//
// export default el => {
//   const is_fixed = css('position', el) === 'fixed';
//   const { top, left } = is_fixed ? el.getBoundingClientRect() : offset(el);
//   const { pTop, pLeft } = is_fixed ? {} : (offsetParent$ => {
//     const { clientTop: pTop, clientLeft: pLeft } = offsetParent$;
//     if (offsetParent$.nodeName.toUpperCase() === 'HTML') return { pTop, pLeft };
//     const { top, left } = offset(offsetParent$)
//     return { pTop: top + pTop, pLeft: left + pLeft };
//   })(offsetParent(el));
//
//   return {
//     top: top - pTop - parseFloat(css('marginTop', el)) + docEl.clientTop,
//     left: left - pLeft - parseFloat(css('marginLeft', el)) + docEl.clientLeft
//   };
// }

// CONCATENATED MODULE: ./node_modules/fxjs2/.internal/go1Sync.js
/* harmony default export */ var go1Sync = ((a, f) => f(a));
// CONCATENATED MODULE: ./node_modules/fxjs2/Strict/tap.js




function tap(f, ...fs) {
  return (a, ...as) => go1(reduce(go1Sync, f(a, ...as), fs), _ => a);
};
// CONCATENATED MODULE: ./node_modules/fxjs2/Strict/isString.js
function isString(a) {
  return typeof a == 'string';
}
// CONCATENATED MODULE: ./node_modules/fxjs2/Strict/go.js



function go(..._) {
  return reduce(go1Sync, _);
}
// CONCATENATED MODULE: ./.internal/_baseOnOff.js



/* harmony default export */ var _baseOnOff = (method =>
  (event, sel, f, ...opts) =>
    tap(el =>
      isString(sel)
      ? go(el, findAll(sel), Strict_each(el => el[method](event, f, ...opts)))
      : el[method](event, sel, ...[f, ...opts])));
// CONCATENATED MODULE: ./on.js


/* harmony default export */ var on = (_baseOnOff('addEventListener'));
// CONCATENATED MODULE: ./off.js


/* harmony default export */ var off = (_baseOnOff('removeEventListener'));
// CONCATENATED MODULE: ./node_modules/fxjs2/.internal/baseExtend.js




function baseExtend(set, obj, objs) {
  const type = typeof obj;
  obj &&
  (type == 'object' || type == 'function') &&
  reduce(reduce(set), obj, Lazy_mapL(entriesL, objs));
  return obj;
}
// CONCATENATED MODULE: ./node_modules/fxjs2/Strict/has.js


/* harmony default export */ var has = (curry(function has(k, obj) {
  return !!(obj && obj.hasOwnProperty(k));
}));
// CONCATENATED MODULE: ./node_modules/fxjs2/Strict/defaults.js



const setter = (obj, [k, v]) => {
  return (has(k, obj) || (obj[k] = v, obj), obj);
};

function defaults(obj, ...objs) {
  return baseExtend(setter, obj, objs);
}
// CONCATENATED MODULE: ./node_modules/fxjs2/Lazy/filterL.js





/* harmony default export */ var Lazy_filterL = (curry(function* filterL(f, iter) {
  for (const a of toIter(iter)) {
    const b = go1(a, f);
    if (b instanceof Promise) yield b.then(b => b ? a : Promise.reject(Strict_nop));
    else if (b) yield a;
  }
}));
// CONCATENATED MODULE: ./delegate.js




/* harmony default export */ var delegate = ((event, sel, f) => tap(el =>
  el.addEventListener(event, e => go(
    el,
    findAll(sel),
    Lazy_filterL(el => el.contains(e.target)),
    Strict_each(currentTarget => f(defaults({ originalEvent: e, currentTarget, delegateTarget: el }, e)))
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
// CONCATENATED MODULE: ./node_modules/fxjs2/Strict/pipe.js



function pipe(f, ...fs) {
  return (...as) => reduce(go1Sync, f(...as), fs);
}
// CONCATENATED MODULE: ./node_modules/fxjs2/Strict/isUndefined.js
/* harmony default export */ var isUndefined = (a => a === undefined);
// CONCATENATED MODULE: ./node_modules/fxjs2/Strict/not.js
function not(a) {
  return !a;
}
// CONCATENATED MODULE: ./node_modules/fxjs2/Lazy/rejectL.js





/* harmony default export */ var Lazy_rejectL = (curry(function rejectL(f, iter) {
  return Lazy_filterL(a => go1(f(a), not), iter);
}));
// CONCATENATED MODULE: ./param.js






/* harmony default export */ var param = (pipe(
  entriesL,
  Lazy_rejectL(([_, a]) => isUndefined(a)),
  Lazy_mapL(Strict_map(encodeURIComponent)),
  Strict_map(([k, v]) => `${k}=${v}`),
  strs => strs.join('&').replace(/%20/g, '+')));
// CONCATENATED MODULE: ./.internal/_fetchBaseOptF.js


const fetchBaseOpt = {
  headers: { "Content-Type": "application/json" },
  credentials: 'same-origin'
};

/* harmony default export */ var _fetchBaseOptF = (headers =>
  headers
    ? defaults(
        {
          headers: defaults(headers, fetchBaseOpt.headers)
        },
        fetchBaseOpt)
    : fetchBaseOpt);

  
// CONCATENATED MODULE: ./.internal/_resJSON.js


/* harmony default export */ var _resJSON = (res => res.ok ? res.json() : go1(res.json(), v => Promise.reject(v)));
// CONCATENATED MODULE: ./get.js





/* harmony default export */ var get = (curry((url, data, headers) => go(
  fetch(url + (data === undefined ? '' : '?' + param(data)), _fetchBaseOptF(headers)),
  _resJSON
)));
// CONCATENATED MODULE: ./.internal/_fetchWithBody.js




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
// CONCATENATED MODULE: ./.internal/_dataMap.js
/* harmony default export */ var _dataMap = (new WeakMap());
// CONCATENATED MODULE: ./setData.js



/* harmony default export */ var setData = (curry((data, el) => {
  _dataMap.set(el, data);
  return el;
}));
// CONCATENATED MODULE: ./node_modules/fxjs2/Strict/curry3.js
function curry3(f) {
  return (a, ..._) => _.length > 2
    ? f(a, ..._)
    : _.length === 2
    ? (...__) => f(a, _[0], _[1], ...__)
    : _.length === 1
    ? (b, ...__) => __.length
      ? f(a, _[0], b, ...__)
      : (...__) => f(a, _[0], b, ...__)
    : (b, ..._) => _.length > 1
      ? f(a, b, ..._)
      : _.length === 1
      ? (...__) => f(a, b, _[0], ...__)
      : (c, ..._) => _.length
        ? f(a, b, c, ..._)
        : (..._) => f(a, b, c, ..._)
}
// CONCATENATED MODULE: ./node_modules/fxjs2/Strict/ifElse.js



/* harmony default export */ var Strict_ifElse = (curry3(function ifElse(cond, t, f, ...args) {
  return go1(cond(...args), b => b ? t(...args) : f(...args));
}));
// CONCATENATED MODULE: ./.internal/_parseDataStr.js
/* harmony default export */ var _parseDataStr = (data_str =>
  JSON.parse(
    data_str
      .replace(/\(2\)/g, '"')
      .replace(/\(1\)/g, "'")
      .replace(/\(\)/g, "(")
  ));

// CONCATENATED MODULE: ./data.js









/* harmony default export */ var data_0 = (el => {
  if (_dataMap.has(el)) return _dataMap.get(el);
  go(
    attr('data-fx-json', el),
    Strict_ifElse(
      s => s.slice(0, 9) == '$dataStr_',
      pipe(s => s.substring(9), _parseDataStr),
      JSON.parse
    ),
    data => setData(data, el),
    setAttr(['data-fx-json', 'IN_WEAK_MAP'])
  );

  return _dataMap.get(el);
});

// CONCATENATED MODULE: ./dataStr.js
/* harmony default export */ var dataStr = (data =>
  '$dataStr_' + JSON.stringify(data)
    .replace(/\(/g, "()")
    .replace(/\(/g, "()")
    .replace(/'/g, "(1)")
    .replace(/"/g, "(2)"));

// CONCATENATED MODULE: ./.internal/_isNumeric.js
/* harmony default export */ var _isNumeric = (n => !isNaN(parseFloat(n)) && isFinite(n));
// CONCATENATED MODULE: ./.internal/_addPx.js


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
  if (Strict_isArray(kv)) {
    const k = _toCamel(kv[0]);
    el.style[k] = _addPx(k, kv[1]);
  } else {
    Strict_each(kv => _setCss(kv, el), entriesL(kv));
  }
  return el;
}));
// CONCATENATED MODULE: ./.internal/_docWidth.js
const _docWidth_docEl = document.documentElement;

/* harmony default export */ var _docWidth = ((isHeight, b = document.body) =>
  isHeight
    ? Math.max(b.offsetHeight, b.scrollHeight, b.clientHeight, _docWidth_docEl.offsetHeight, _docWidth_docEl.offsetHeight, _docWidth_docEl.clientHeight)
    : Math.max(b.offsetWidth, b.scrollWidth, b.clientWidth, _docWidth_docEl.offsetWidth, _docWidth_docEl.offsetWidth, _docWidth_docEl.clientWidth));

// CONCATENATED MODULE: ./.internal/_cssF.js


/* harmony default export */ var _cssF = ((k, el) => parseFloat(css(k, el)) || 0);
// CONCATENATED MODULE: ./.internal/_getDefaultDisplays.js


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
  if (css('display', el) == 'none') el.style.display = getDefaultDisplays(el);
  return el;
});
// CONCATENATED MODULE: ./hide.js


const prevDisplays = new WeakMap();

/* harmony default export */ var hide = (el => {
  const prev_display = css('display', el);
  if (prev_display != 'none') {
    prevDisplays.set(el, prev_display);
    el.style.display = 'none';
  }
  return el;
});
// CONCATENATED MODULE: ./elWidth.js





const isIE = /trident/i.test(navigator.userAgent);

function getBorderBoxValue(Left, Right, el) {
  return _cssF('border'+Left+'Width', el) +
    _cssF('border'+Right+'Width', el) +
    _cssF('padding'+Left, el) +
    _cssF('padding'+Right, el)
}

function elWidth(el, prefix = '', isHeight) {
  const [ width, Left, Right ] = isHeight ? ['height', 'Top', 'Bottom'] : ['width', 'Left', 'Right'];
  const isHidden = css('display', el) === 'none' && show(el);
  const isBorderBox = css('boxSizing', el) === 'border-box';
  const isOnlyWidth = !prefix;
  const needCalcBorderBoxValue = (isIE && isBorderBox) || (!isOnlyWidth && !isBorderBox) || (isOnlyWidth && isBorderBox);
  const borderBoxValue = needCalcBorderBoxValue ? getBorderBoxValue(Left, Right, el) : 0;

  let value = _cssF(width, el);
  if (isIE && isBorderBox) value += borderBoxValue;

  if (isOnlyWidth) {
    if (isBorderBox) value -= borderBoxValue;
  } else {
    if (!isBorderBox) value += borderBoxValue;
    if (prefix == 'outer') value += _cssF('margin'+Left, el) + _cssF('margin'+Right, el);
  }

  isHidden && hide(el);

  return value;
}

// CONCATENATED MODULE: ./width.js



/* harmony default export */ var width_0 = (el => el == window ? el.innerWidth : el == document ? _docWidth() : elWidth(el));

// CONCATENATED MODULE: ./innerWidth.js


/* harmony default export */ var innerWidth_0 = (el => elWidth(el, 'inner'));
// CONCATENATED MODULE: ./outerWidth.js


/* harmony default export */ var outerWidth_0 = (el => elWidth(el, 'outer'));
// CONCATENATED MODULE: ./height.js



/* harmony default export */ var height = (el => el == window ? el.innerHeight : el == document ? _docWidth(true) : elWidth(el, '', true));
// CONCATENATED MODULE: ./innerHeight.js


/* harmony default export */ var innerHeight_0 = (el => elWidth(el, 'inner', true));
// CONCATENATED MODULE: ./outerHeight.js


/* harmony default export */ var outerHeight_0 = (el => elWidth(el, 'outer', true));
// CONCATENATED MODULE: ./toggle.js




/* harmony default export */ var toggle = (el => css('display', el) == 'none' ? show(el) : hide(el));
// CONCATENATED MODULE: ./_index.js







































































// CONCATENATED MODULE: ./fxdom.js

window.$ = _index_namespaceObject;


/***/ })
/******/ ]);
//# sourceMappingURL=fxd.js.map