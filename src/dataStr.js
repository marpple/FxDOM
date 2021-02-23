const $dataStr = (data) =>
  "$dataStr_" +
  JSON.stringify(data)
    .replace(/\(/g, "()")
    .replace(/'/g, "(1)")
    .replace(/"/g, "(2)");

export default $dataStr;
