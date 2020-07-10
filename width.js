import docWidth from './.internal/_docWidth.js';
import elWidth from "./elWidth.js";

export default el => el == window ? el.innerWidth : el == document ? docWidth() : elWidth(el);
