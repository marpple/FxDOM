import { curry } from "fxjs/esm";
import replaceWith from "./replaceWith.js";

export default curry(function replaceAll(el, newEl) {
  replaceWith(newEl, el);
  return newEl;
});
