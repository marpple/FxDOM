import contains from "./contains.js";
import css from "./css.js";
import getDefaultDisplays from "./_internal/_getDefaultDisplays.js";
import getPrevDisplay from "./_internal/_getPrevDisplay.js";

export default (el) => {
  let val;
  const display = el.style.display;
  if (display === "none") {
    val = getPrevDisplay.get(el) || null;
    if (!val) el.style.display = "";
  }
  if (el.style.display === "" && (
    el.style.display === "none" ||
    el.style.display === "" &&
    contains(el, el.ownerDocument) &&
    css("display", el) === "none")
  ) val = getDefaultDisplays(el);
  if (val != null) el.style.display = val;
  return el;
};
