import baseScroll from './.internal/_baseScroll.js';

export default (val, el) => baseScroll(el, val, "pageYOffset", "scrollTop");