import { curry } from "fxjs2";

export default curry(function prop(k, el) {
  return el[k];
});
