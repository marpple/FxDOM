import {
  isUndefined,
  pipe,
  map,
  L
} from "fxjs2";

export default pipe(
  L.entries,
  L.reject(([_, a]) => isUndefined(a)),
  L.map(map(encodeURIComponent)),
  map(([k, v]) => `${k}=${v}`),
  strs => strs.join('&').replace(/%20/g, '+'));