import { go1 } from "fxjs/esm";

export default (res) =>
  res.ok ? res.json() : go1(res.json(), (v) => Promise.reject(v));
