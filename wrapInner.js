import wrapAll from "./wrapAll.js";
import { curry } from "fxjs2";

export default curry(function wrapInner(wrapper, el) {
  return wrapAll(wrapper, el.childNodes);
});
