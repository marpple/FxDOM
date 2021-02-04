import children from "./children.js";
import $not from "./not.js";

export default function siblings(sel, el) {
  if (arguments.length == 1) {
    if (typeof sel == "string") return (el) => siblings(sel, el);
    el = sel;
    sel = "*";
  }
  return $not((_el) => el === _el, children(el.parentNode));
}
