import { curry, isArray, each } from "fxjs/es";
import entriesL from "fxjs/es/Lazy/entriesL.js";

export default curry(
  (kv, el) => (
    isArray(kv)
      ? el.setAttribute(...kv)
      : each((kv) => el.setAttribute(...kv), entriesL(kv)),
    el
  )
);
