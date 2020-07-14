import { curry, reject } from 'fxjs2'
import is from "./is.js";

export default curry(function _not(funcOrSel, els) {
  return reject(typeof funcOrSel == 'string' ? is(funcOrSel) : funcOrSel, els);
});
