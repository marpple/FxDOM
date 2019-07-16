import { curry } from 'fxjs2';
import dataMap from './_dataMap.js';

export default curry((data, el) => {
  dataMap.set(el, data);
  return el;
});