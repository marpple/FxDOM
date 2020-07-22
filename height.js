import docWidth from "./.internal/_docWidth.js";
import elWidth from "./elWidth.js";

export default (el) =>
  el == window
    ? el.innerHeight
    : el == document
    ? docWidth(true)
    : elWidth(el, "", true);
