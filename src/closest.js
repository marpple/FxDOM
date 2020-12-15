import { curry } from "fxjs/esm";
export default curry((sel, el) => el.closest(sel));
