import wrapAll from "./wrapAll.js";
import { curry } from "fxjs/es";

export default curry(function wrapInner(wrapper, el) {
  return wrapAll(wrapper, el.childNodes);
});
