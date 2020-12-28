import { each } from "fxjs/es";
import __addClass__ from "./suits/addClass.spec.js";
import __attr__ from "./suits/attr.spec.js";
import __el__ from "./suits/el.spec.js";
import __setAttr__ from "./suits/setAttr.spec.js";

each((spec) => spec({ describe, it }), [
  __addClass__,
  __attr__,
  __el__,
  __setAttr__,
]);
