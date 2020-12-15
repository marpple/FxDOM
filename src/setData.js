import { curry } from "fxjs/esm";
import dataMap from "./.internal/_dataMap.js";

export default curry((data, el) => {
  dataMap.set(el, data);
  return el;
});
