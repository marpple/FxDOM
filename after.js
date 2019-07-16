import { curry } from 'fxjs2';
import append from './append.js';
import before from './before.js';

export default curry((a, b) =>
  a.nextSibling ? before(a.nextSibling, b) : append(a.parentNode, b));