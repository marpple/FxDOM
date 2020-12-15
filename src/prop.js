import { curry } from "fxjs/esm";

export default curry(function prop(k, el) {
  return el[k];
});
