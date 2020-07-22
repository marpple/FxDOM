import { curry, isArray, each } from "fxjs2";
import entriesL from "fxjs2/Lazy/entriesL.js";

export default curry(
  (kv, el) => (
    isArray(kv)
      ? el.setAttribute(...kv)
      : each((kv) => el.setAttribute(...kv), entriesL(kv)),
    el
  )
);
