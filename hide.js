import css from './css.js';

const prevDisplays = new WeakMap();

export default el => {
  const prev_display = css('display', el);
  if (prev_display != 'none') {
    prevDisplays.set(el, prev_display);
    el.style.display = 'none';
  }
  return el;
};