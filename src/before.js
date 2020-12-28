import { curry } from "fxjs/es";

export default curry((newEl, el) => el.parentNode.insertBefore(newEl, el));
