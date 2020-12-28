import { curry } from "fxjs/es";
import matches from "./.internal/_matches.js";

export default curry((sel, el) => el && matches.call(el, sel));
