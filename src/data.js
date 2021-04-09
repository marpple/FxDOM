import go from "fxjs/es/Strict/go.js";
import dataMap from "./_internal/_dataMap.js";
import parseDataStr from "./parseDataStr.js";
import attr from "./attr.js";
import setAttr from "./setAttr.js";
import setData from "./setData.js";

export default (el) => {
  if (dataMap.has(el)) return dataMap.get(el);
  go(
    attr("data-fx-json", el),
    parseDataStr,
    (data) => setData(data, el),
    setAttr(["data-fx-json", "IN_WEAK_MAP"])
  );

  return dataMap.get(el);
};
