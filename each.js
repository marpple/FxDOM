import { curry, each } from "fxjs2";

export default curry(function _each(func, els) {
  return each(func, [...els]);
});
