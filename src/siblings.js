import children from "./children.js";
import { filter } from "fxjs/es";
import $is from "./is.js";

export default function siblings(sel, el) {
  if (arguments.length == 1) {
    if (typeof sel == "string") return (el) => siblings(sel, el);
    el = sel;
    sel = "*";
  }

  return filter((_el) => el !== _el && $is(sel, _el), children(el.parentNode));
}
