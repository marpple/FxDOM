import css from '../css.js';

export default (k, el) => parseFloat(css(k, el)) || 0;