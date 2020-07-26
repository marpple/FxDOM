import { curry } from "fxjs2";
import before from "./before.js";

export default curry((el, newEl) => before(newEl, el));
