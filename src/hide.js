import getPrevDisplay from "./_internal/_getPrevDisplay.js";

export default (el) => {
  const prev_display = el.style.display;
  if (prev_display != "none") {
    getPrevDisplay.set(el, prev_display);
    el.style.display = "none";
  }
  return el;
};
