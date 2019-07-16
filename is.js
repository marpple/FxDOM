import { curry } from 'fxjs2';
import matches from './_matches.js';

export default curry((sel, el) => el && matches.call(el, sel));