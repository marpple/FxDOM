import { curry } from "fxjs2";

export default curry((html, el) => (el.outerHTML = html));
