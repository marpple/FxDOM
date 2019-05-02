import { curry } from 'fxjs2';

export default curry((html, el) => (el.innerHTML = html, el));