import { curry } from "fxjs/es";

export default curry((k, el) => (delete el[k], el));
