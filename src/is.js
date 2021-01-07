import { curry } from "fxjs/es";
import matches from "./_internal/_matches.js";

export default curry((sel, el) => el && matches.call(el, sel));
