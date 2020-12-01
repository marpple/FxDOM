import isNumeric from "./_isNumeric.js";

const numberTypes = {
  animationIterationCount: true,
  columnCount: true,
  fillOpacity: true,
  flexGrow: true,
  flexShrink: true,
  fontWeight: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  widows: true,
  zIndex: true,
  zoom: true,
};

export default (k, v) => (numberTypes[k] ? v : isNumeric(v) ? v + "px" : v);
