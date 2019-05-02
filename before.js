import { curry } from 'fxjs2';

export default curry((after, before) => after.parentNode.insertBefore(before, after));