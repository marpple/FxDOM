import {
  isUndefined,
  pipe,
  map
} from "fxjs2";

import entriesL from "fxjs2/Lazy/entriesL.js";
import rejectL from "fxjs2/Lazy/rejectL.js";
import mapL from "fxjs2/Lazy/mapL.js";

export default pipe(
  entriesL,
  rejectL(([_, a]) => isUndefined(a)),
  mapL(map(encodeURIComponent)),
  map(([k, v]) => `${k}=${v}`),
  strs => strs.join('&').replace(/%20/g, '+'));