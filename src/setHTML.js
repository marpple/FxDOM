import { curry } from "fxjs/esm";

export default curry((html, el) => ((el.innerHTML = html), el));
