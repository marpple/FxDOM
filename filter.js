import { curry, filter } from 'fxjs2'
import is from "./is.js";

export default curry(function _filter(funcOrSel, els) {
  return filter(typeof funcOrSel == 'string' ? is(funcOrSel) : funcOrSel, els);
});
