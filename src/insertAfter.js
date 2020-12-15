import { curry } from "fxjs/esm";
import after from "./after.js";

export default curry((el, newEl) => after(newEl, el));
