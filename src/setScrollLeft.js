import { curry } from "fxjs/es";
import baseScroll from "./.internal/_baseScroll.js";

export default curry((val, el) =>
  baseScroll(el, val, "pageXOffset", "scrollLeft")
);
