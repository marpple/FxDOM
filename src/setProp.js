import { curry } from "fxjs/es";

export default curry((kv, el) => Object.assign(el, kv));
