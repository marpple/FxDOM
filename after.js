import { curry } from 'fxjs2';
import appendTo from './appendTo.js';
import before from './before.js';

export default curry((a, b) =>
  a.nextSibling ? before(a.nextSibling, b) : appendTo(a.parentNode, b));