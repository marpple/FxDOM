import { document_wrapper } from "./_browser.js";

const docEl = document_wrapper.documentElement;
export default docEl?.matches ||
  docEl?.webkitMatchesSelector ||
  docEl?.mozMatchesSelector ||
  docEl?.msMatchesSelector;
