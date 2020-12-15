import { curry } from "fxjs/esm";

export default curry((value, el) => ((el.value = value), el));
