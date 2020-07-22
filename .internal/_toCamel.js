export default (str) =>
  str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
