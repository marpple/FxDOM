import { curry } from 'fxjs2';

export default curry((k, el) => (delete el[k], el));
