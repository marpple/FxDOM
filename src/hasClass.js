import { curry } from "fxjs/esm";

export default curry((class_name, el) => el.classList.contains(class_name));
