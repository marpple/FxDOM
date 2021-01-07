import css from "../css.js";

const defaultDisplays = {};

export default function getDefaultDisplays(el) {
  let nodeName = el.nodeName,
    display = defaultDisplays[nodeName];
  if (display) return display;

  let temp,
    doc = el.ownerDocument;
  temp = doc.body.appendChild(doc.createElement(nodeName));
  display = css("display", temp);
  temp.parentNode.removeChild(temp);

  if (display == "none") display = "block";
  return (defaultDisplays[nodeName] = display);
}
