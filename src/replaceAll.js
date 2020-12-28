import { curry } from "fxjs/es";
import replaceWith from "./replaceWith.js";

export default curry(function replaceAll(el, newEl) {
  replaceWith(newEl, el);
  return newEl;
});
