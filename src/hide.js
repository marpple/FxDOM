import getPrevDisplay from "./_internal/_getPrevDisplay.js";

export default (el) => {
  let val;
  const display = el.style.display;
  if (display !== "none") {
    val = "none";
    getPrevDisplay.set(el, display);
  }
  if (val != null) el.style.display = val;
  return el;
};
