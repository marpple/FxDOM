import isEl from './_isEl.js';
import is from '../is.js';
import nextOrPrevAll from './_nextOrPrevAll.js';
export default (k, add) => function f(sel, until, el) {
  if (arguments.length == 1) {
    if (typeof sel == 'string') return (until, el) => f(sel, until, el);
    return nextOrPrevAll(k, add)(sel);
  } else if (arguments.length == 2) {
    if (typeof until == 'string') return el => f(sel, until, el);
    el = until;
    until = sel;
    sel = '*';
  }
  let res = [], cur = el;
  while ((cur = cur[k]) && cur.nodeType !== 9) {
    if (isEl(cur)) {
      if (cur === until) break;
      if (is(sel, cur)) res[add](cur);
    }
  }
  return res;
};
