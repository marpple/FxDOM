const docEl = document.documentElement;

export default (isHeight, b = document.body) =>
  isHeight
    ? Math.max(b.offsetHeight, b.scrollHeight, b.clientHeight, docEl.offsetHeight, docEl.offsetHeight, docEl.clientHeight)
    : Math.max(b.offsetWidth, b.scrollWidth, b.clientWidth, docEl.offsetWidth, docEl.offsetWidth, docEl.clientWidth);
