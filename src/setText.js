import { curry } from "fxjs/esm";

export default curry((text, el) => ((el.textContent = text), el));
