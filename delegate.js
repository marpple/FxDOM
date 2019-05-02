import { tap, go, L, each, defaults } from 'fxjs2';
import findAll from './findAll.js';

export default (event, sel, f) => tap(el =>
  el.addEventListener(event, e => go(
    el,
    findAll(sel),
    L.filter(el => el.contains(e.target)),
    each(currentTarget => f(defaults({ originalEvent: e, currentTarget, delegateTarget: el }, e)))
  ))
);