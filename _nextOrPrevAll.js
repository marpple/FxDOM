import isEl from './_isEl.js';
import is from './is.js';

export default (k, add) => function f(sel, el) {
  if (arguments.length == 1) {
    if (typeof sel == 'string') return el => f(sel, el);
    el = sel;
    sel = '*';
  }
  let res = [], cur = el;
  while ((cur = cur[k])) if (isEl(cur) && is(sel, cur)) res[add](cur);
  return res;
};