import { curry } from "fxjs/esm";

export default curry((html, el) => (el.outerHTML = html));
