import { curry, isArray, each } from "fxjs/es";
import entriesL from "fxjs/es/Lazy/entriesL.js";
import toCamel from "./.internal/_toCamel.js";
import addPx from "./.internal/_addPx.js";

export default curry(function _setCss(kv, el) {
  if (isArray(kv)) {
    const k = toCamel(kv[0]);
    el.style[k] = addPx(k, kv[1]);
  } else {
    each((kv) => _setCss(kv, el), entriesL(kv));
  }
  return el;
});
