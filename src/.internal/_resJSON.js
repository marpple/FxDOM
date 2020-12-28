import { go1 } from "fxjs/es";

export default (res) =>
  res.ok ? res.json() : go1(res.json(), (v) => Promise.reject(v));
