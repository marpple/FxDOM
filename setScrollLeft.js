import {curry} from "fxjs2";
import baseScroll from './.internal/_baseScroll.js';

export default curry((val, el) => baseScroll(el, val, "pageXOffset", "scrollLeft"));
