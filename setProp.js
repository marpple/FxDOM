import { curry } from 'fxjs2';

export default curry((kv, el) => Object.assign(el, kv));
