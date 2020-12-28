import { curry } from "fxjs/es";
import on from "./on.js";

export default curry(function ready(cb, el) {
  return on("DOMContentLoaded", cb)(el);
});
