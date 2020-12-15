import { curry } from "fxjs/esm";

export default curry((k, el) => (el.removeAttribute(k), el));
