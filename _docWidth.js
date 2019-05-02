const docEl = document.documentElement;

export default (isHeight, b = document.body) =>
  isHeight
    ? Math.max(b.offsetHeight, b.scrollHeight, docEl.offsetHeight, docEl.offsetHeight, docEl.clientHeight)
    : Math.max(b.offsetWidth, b.scrollWidth, docEl.offsetWidth, docEl.offsetWidth, docEl.clientWidth);