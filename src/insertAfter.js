import { curry } from "fxjs/es";
import after from "./after.js";

export default curry((el, newEl) => after(newEl, el));
