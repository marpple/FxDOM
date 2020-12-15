import { isUndefined, pipe, map } from "fxjs/esm";

import entriesL from "fxjs/esm/Lazy/entriesL.js";
import rejectL from "fxjs/esm/Lazy/rejectL.js";
import mapL from "fxjs/esm/Lazy/mapL.js";

export default pipe(
  entriesL,
  rejectL(([_, a]) => isUndefined(a)),
  mapL(map(encodeURIComponent)),
  map(([k, v]) => `${k}=${v}`),
  (strs) => strs.join("&").replace(/%20/g, "+")
);
