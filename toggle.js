import css from './css.js';
import show from './show.js';
import hide from './hide.js';

export default el => css('display', el) == 'none' ? show(el) : hide(el);