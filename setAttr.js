import { curry, isArray, each, L } from 'fxjs2';

export default curry((kv, el) => (
  isArray(kv)
    ? el.setAttribute(...kv)
    : each(kv => el.setAttribute(...kv), L.entries(kv)), el));