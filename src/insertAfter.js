import { curry } from "fxjs2";
import after from "./after.js";

export default curry((el, newEl) => after(newEl, el));
