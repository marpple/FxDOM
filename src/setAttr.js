import { curry, isArray, each } from "fxjs/esm";
import entriesL from "fxjs/esm/Lazy/entriesL.js";

export default curry(
  (kv, el) => (
    isArray(kv)
      ? el.setAttribute(...kv)
      : each((kv) => el.setAttribute(...kv), entriesL(kv)),
    el
  )
);
