import nextAll from "./nextAll.js";
import prevAll from "./prevAll.js";

export default function siblings(...args) {
  return [...prevAll(...args), ...nextAll(...args)];
};
