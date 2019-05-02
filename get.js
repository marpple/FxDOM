import { curry, go } from 'fxjs2';
import fetchBaseOptF from './_fetchBaseOptF.js';
import resJSON from './_resJSON.js';
import param from './param.js';

export default curry((url, data, headers) => go(
  fetch(url + (data === undefined ? '' : '?' + param(data)), fetchBaseOptF(headers)),
  resJSON
));