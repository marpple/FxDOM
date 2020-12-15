import { curry } from "fxjs/esm";
import before from "./before.js";
import remove from "./remove.js";

export default curry(function replaceWith(newEl, el) {
  before(newEl, el);
  return remove(el);
});
