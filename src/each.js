import { curry, each } from "fxjs/esm";

export default curry(function _each(func, els) {
  return each(func, [...els]);
});
