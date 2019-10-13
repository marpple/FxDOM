import docWidth from '.internal/_docWidth.js';

export default el => el == window ? el.innerWidth : el == document ? docWidth() : elWidth(el);