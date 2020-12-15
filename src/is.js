import { curry } from "fxjs/esm";
import matches from "./.internal/_matches.js";

export default curry((sel, el) => el && matches.call(el, sel));
