import { curry, map } from 'fxjs2'

export default curry(function _map(func, els) {
  return map(func, els);
});
