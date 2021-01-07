import css from "./css.js";
import getDefaultDisplays from "./_internal/_getDefaultDisplays.js";
import getPrevDisplay from "./_internal/_getPrevDisplay.js";
export default (el) => {
  let display = "";
  if (el.style.display == "none") {
    display = getPrevDisplay.get(el) || null;
    if (!display) el.style.display = "";
  }
  if (el.style.display == "" && css("display", el) == "none")
    display = getDefaultDisplays(el);
  el.style.display = display;
  return el;
};
