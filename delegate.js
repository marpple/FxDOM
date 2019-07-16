import { tap, go, each, defaults } from 'fxjs2';
import filterLazy from 'fxjs2/Lazy/filterLazy.js'
import findAll from './findAll.js';

export default (event, sel, f) => tap(el =>
  el.addEventListener(event, e => go(
    el,
    findAll(sel),
    filterLazy(el => el.contains(e.target)),
    each(currentTarget => f(defaults({ originalEvent: e, currentTarget, delegateTarget: el }, e)))
  ))
);