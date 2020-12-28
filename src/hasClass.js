import { curry } from "fxjs/es";

export default curry((class_name, el) => el.classList.contains(class_name));
