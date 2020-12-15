import { curry } from "fxjs/esm";
import append from "./append.js";
import before from "./before.js";

export default curry((newEl, el) =>
  el.nextSibling ? before(newEl, el.nextSibling) : append(newEl, el.parentNode)
);
