import { curry } from 'fxjs2';

export default curry((child, parent) => parent.insertBefore(child, parent.firstChild));