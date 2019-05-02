import { curry } from 'fxjs2';

export default curry((k, el) => (el.removeAttribute(k), el));