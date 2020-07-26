export default (node) =>
  node && typeof node == "object" && (node.nodeType == 1 || node.nodeType == 9);
