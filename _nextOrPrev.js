import isEl from './_isEl.js';
import is from './is.js';

export default k => function f(sel, el) {
  if (arguments.length == 1) {
    if (typeof sel == 'string') return el => f(sel, el);
    el = sel;
    sel = '*';
  }
  let cur = el;
  while ((cur = cur[k]) && (!isEl(cur) || !is(sel, cur))) {}
  return cur;
};