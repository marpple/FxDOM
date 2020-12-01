import { curry } from "fxjs2";

export default curry((class_name, el) => el.classList.contains(class_name));
