import {
  isUndefined,
  pipe,
  map
} from "fxjs2";

import entriesLazy from "fxjs2/Lazy/entriesLazy.js";
import rejectLazy from "fxjs2/Lazy/rejectLazy.js";
import mapLazy from "fxjs2/Lazy/mapLazy.js";

export default pipe(
  entriesLazy,
  rejectLazy(([_, a]) => isUndefined(a)),
  mapLazy(map(encodeURIComponent)),
  map(([k, v]) => `${k}=${v}`),
  strs => strs.join('&').replace(/%20/g, '+'));