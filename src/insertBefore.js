import { curry } from "fxjs/esm";
import before from "./before.js";

export default curry((el, newEl) => before(newEl, el));
