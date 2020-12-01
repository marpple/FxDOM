import { curry } from "fxjs2";
export default curry((sel, el) => el.closest(sel));
