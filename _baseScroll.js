export default function baseScroll(el, val, prop, method) {
  el = el || window;
  var top = prop == "pageYOffset";
  var win = el == window || el == document ? window : null;
  if (val == undefined) return win ? win[ prop ] : el[ method ];
  if (win) win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
  else el[method] = val;
  return el;
}