import { go1 } from "fxjs2";

export default (res) =>
  res.ok ? res.json() : go1(res.json(), (v) => Promise.reject(v));
