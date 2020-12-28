import { curry } from "fxjs/es";

export default curry((html, el) => (el.outerHTML = html));
