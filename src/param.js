import { isUndefined, pipe, map } from "fxjs/es";

import entriesL from "fxjs/es/Lazy/entriesL.js";
import rejectL from "fxjs/es/Lazy/rejectL.js";
import mapL from "fxjs/es/Lazy/mapL.js";

export default pipe(
  entriesL,
  rejectL(([_, a]) => isUndefined(a)),
  mapL(map(encodeURIComponent)),
  map(([k, v]) => `${k}=${v}`),
  (strs) => strs.join("&").replace(/%20/g, "+")
);
