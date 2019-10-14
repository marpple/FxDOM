import { curry, object } from 'fxjs2';
import mapL from 'fxjs2/Lazy/mapL.js';
import toCamel from '.internal/_toCamel.js';

export default curry(function _css(k, el) {
  return typeof k == 'string'
    ? el.style[k] || el.ownerDocument.defaultView.getComputedStyle(el, null)[toCamel(k)]
    : object(mapL(k => [k, _css(k, el)], k))
});