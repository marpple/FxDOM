import { curry } from "fxjs/esm";
import appendTo from "./appendTo.js";
import before from "./before.js";

export default curry(function wrap(wrapper, el) {
  appendTo(before(wrapper, el), el);
  return wrapper;
});
