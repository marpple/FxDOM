import { curry } from "fxjs/es";

export default curry((value, el) => ((el.value = value), el));
