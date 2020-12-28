import { curry } from "fxjs/es";
import before from "./before.js";

export default curry((el, newEl) => before(newEl, el));
