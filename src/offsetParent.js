import css from "./css.js";
const docEl = document.documentElement;

export default function offsetParent(el) {
  let offsetParent = el;
  while (
    (offsetParent = offsetParent.offsetParent) &&
    css("position", offsetParent) === "static"
  ) {}
  return offsetParent || docEl;
}
