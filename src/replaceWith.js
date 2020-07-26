import { curry } from "fxjs2";
import before from "./before.js";
import remove from "./remove.js";

export default curry(function replaceWith(newEl, el) {
  before(newEl, el);
  return remove(el);
});
