const docEl = document.documentElement;
export default docEl.matches || docEl.webkitMatchesSelector || docEl.mozMatchesSelector || docEl.msMatchesSelector;