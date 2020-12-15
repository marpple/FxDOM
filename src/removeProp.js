import { curry } from "fxjs/esm";

export default curry((k, el) => (delete el[k], el));
