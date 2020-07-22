import { curry } from "fxjs2";

export default curry((newEl, el) => el.parentNode.insertBefore(newEl, el));
