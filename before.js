import { curry } from 'fxjs2';

export default curry((el, newEl) => el.parentNode.insertBefore(newEl, el));