import pipe from "fxjs/es/Strict/pipe.js";

export default pipe((s) => {
  if (s.slice(0, 9) !== "$dataStr_") return s;
  return s
    .substring(9)
    .replace(/\(2\)/g, '"')
    .replace(/\(1\)/g, "'")
    .replace(/\(\)/g, "(");
}, JSON.parse);
