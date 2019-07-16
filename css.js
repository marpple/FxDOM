import { curry, object } from 'fxjs2';
import mapLazy from 'fxjs2/Lazy/mapLazy.js';
import toCamel from './_toCamel.js';

export default curry(function _css(k, el) {
  return typeof k == 'string'
    ? el.style[k] || el.ownerDocument.defaultView.getComputedStyle(el, null)[toCamel(k)]
    : object(mapLazy(k => [k, _css(k, el)], k))
});