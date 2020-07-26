const docEl = document.documentElement;

export default (el) => {
  const rect = el.getBoundingClientRect();
  return {
    top: rect.top + window.pageYOffset - docEl.clientTop,
    left: rect.left + window.pageXOffset - docEl.clientLeft,
  };
};
