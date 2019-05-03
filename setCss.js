import { curry, isArray, each } from 'fxjs2';
import entriesLazy from 'fxjs2/Lazy/entriesLazy.js';
import toCamel from './_toCamel.js';
import addPx from './_addPx.js';

export default curry(function _setCss(kv, el) {
  if (isArray(kv)) {
    const k = toCamel(kv[0]);
    el.style[k] = addPx(k, kv[1]);
  } else {
    each(kv => _setCss(kv, el), entriesLazy(kv));
  }
  return el;
});