import css from "./css.js";
import { document_wrapper } from "./_internal/_browser.js";
const docEl = document_wrapper.documentElement;

export default function offsetParent(el) {
  let offsetParent = el;
  while (
    (offsetParent = offsetParent.offsetParent) &&
    css("position", offsetParent) === "static"
  ) {}
  return offsetParent || docEl;
}
