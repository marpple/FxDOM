import { curry } from "fxjs/es";

export default curry((text, el) => ((el.textContent = text), el));
