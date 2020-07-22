import { curry } from "fxjs2";

export default curry((text, el) => ((el.textContent = text), el));
