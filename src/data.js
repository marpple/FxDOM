import go from "fxjs/es/Strict/go.js";
import ifElse from "fxjs/es/Strict/ifElse.js";
import pipe from "fxjs/es/Strict/pipe.js";
import dataMap from "./_internal/_dataMap.js";
import _parseDataStr from "./_internal/_parseDataStr.js";
import attr from "./attr.js";
import setAttr from "./setAttr.js";
import setData from "./setData.js";

export default (el) => {
  if (dataMap.has(el)) return dataMap.get(el);
  go(
    attr("data-fx-json", el),
    ifElse(
      (s) => s.slice(0, 9) == "$dataStr_",
      pipe((s) => s.substring(9), _parseDataStr),
      JSON.parse
    ),
    (data) => setData(data, el),
    setAttr(["data-fx-json", "IN_WEAK_MAP"])
  );

  return dataMap.get(el);
};
