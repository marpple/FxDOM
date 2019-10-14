import css from './css.js';
import getDefaultDisplays from './.internal/_getDefaultDisplays.js';

export default el => {
  if (el.style.display == 'none') el.style.display = '';
  if (css('display', el) == 'none') el.style.display = getDefaultDisplays(el);
  return el;
};