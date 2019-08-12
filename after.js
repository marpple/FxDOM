import { curry } from 'fxjs2';
import appendTo from './appendTo.js';
import before from './before.js';

export default curry((el, newEl) =>
  el.nextSibling ? before(el.nextSibling, newEl) : appendTo(el.parentNode, newEl));