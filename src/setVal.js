import { curry } from "fxjs2";

export default curry((value, el) => ((el.value = value), el));
