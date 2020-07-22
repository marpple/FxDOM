import { curry } from "fxjs2";
import appendTo from "./appendTo.js";
import before from "./before.js";

export default curry((newEl, el) =>
  el.nextSibling
    ? before(newEl, el.nextSibling)
    : appendTo(newEl, el.parentNode)
);
