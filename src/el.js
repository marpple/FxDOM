import { head } from "fxjs/es";
import els from "./els.js";

export default (html) => {
  html = html.trim();
  return html[0] == "<" ? head(els(html)) : document.createElement(html);
};
