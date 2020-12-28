import { curry, each } from "fxjs/es";

export default (method) =>
  curry(
    (class_names, el) => (
      each((cn) => el.classList[method](cn), class_names.split(" ")), el
    )
  );
