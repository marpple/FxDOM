import { curry, isArray, each } from 'fxjs2';
import entriesLazy from 'fxjs2/Lazy/entriesLazy.js';

export default curry((kv, el) => (
  isArray(kv)
    ? el.setAttribute(...kv)
    : each(kv => el.setAttribute(...kv), entriesLazy(kv)), el));