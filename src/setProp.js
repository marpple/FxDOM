import { curry } from "fxjs/esm";

export default curry((kv, el) => Object.assign(el, kv));
