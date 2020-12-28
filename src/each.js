import { curry, each } from "fxjs/es";

export default curry(function _each(func, els) {
  return each(func, [...els]);
});
