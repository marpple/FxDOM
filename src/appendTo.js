import { curry } from "fxjs/esm";

export default curry((parent, child) => (parent.appendChild(child), parent));
