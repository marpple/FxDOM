import {curry, go, go1, map, takeWhile, sel, sum, takeUntil} from "fxjs/es";
import attr from "./attr.js";
import closest from "./closest.js";
import data from "./data.js";

const recursiveL = curry(function* (f, start) {
  while (true) yield (start = go1(start, f));
});
const recursiveWithStartL = curry(function* (f, start) {
  yield start;
  yield* recursiveL(f)(start);
});

export default (el) => {
  const fx_json_el = closest('[data-fx-json]', el);
  return go(
    closest('[data-fx-sel]', el),
    recursiveWithStartL(el => closest('[data-fx-sel]', el.parentElement)),
    takeUntil((sel_el) => sel_el && attr('data-fx-sel', sel_el).indexOf('.') < 0),
    map(attr('data-fx-sel')),
    (sels) => (sels.length ? sel(sum(sels.reverse()), data(fx_json_el)) : undefined),
  )
};
