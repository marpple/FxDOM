import { curry } from "fxjs/es";
import dataMap from "./.internal/_dataMap.js";

export default curry((data, el) => {
  dataMap.set(el, data);
  return el;
});
