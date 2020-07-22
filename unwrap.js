import $each from "./each.js";
import insertBefore from "./insertBefore.js";
import remove from "./remove.js";

export default function unwrap(el) {
  const unWrapper = el.parentNode;
  $each(insertBefore(unWrapper), unWrapper.childNodes);
  remove(unWrapper);
  return el;
}
