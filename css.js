import { curry, object, L } from 'fxjs2';
import toCamel from './_toCamel.js';

export default curry(function _css(k, el) {
  return typeof k == 'string'
    ? el.style[k] || el.ownerDocument.defaultView.getComputedStyle(el, null)[toCamel(k)]
    : object(L.map(k => [k, _css(k, el)], k))
});