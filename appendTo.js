import { curry } from 'fxjs2';

export default curry((parent, child) => (parent.appendChild(child), parent));
