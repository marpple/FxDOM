import { curry } from "fxjs/esm";

export default curry((newEl, el) => el.parentNode.insertBefore(newEl, el));
