import { curry } from "fxjs2";
import append from "./append.js";
import before from "./before.js";

export default curry((newEl, el) =>
  el.nextSibling ? before(newEl, el.nextSibling) : append(newEl, el.parentNode)
);
