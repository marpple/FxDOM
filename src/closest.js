import { curry } from "fxjs/es";
export default curry((sel, el) => el.closest(sel));
