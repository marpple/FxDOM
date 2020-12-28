import { curry } from "fxjs/es";

export default curry(function prop(k, el) {
  return el[k];
});
