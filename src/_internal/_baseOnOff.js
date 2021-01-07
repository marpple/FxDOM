import { isString, each } from "fxjs/es";
import findAll from "../findAll.js";

export default (method) => (event, f, ...opts) => (el) => (
  isString(f)
    ? each((el) => el[method](event, ...opts), findAll(f, el))
    : el[method](event, f, ...opts),
  el
);
