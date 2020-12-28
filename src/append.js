import { curry } from "fxjs/es";

export default curry((child, parent) => parent.appendChild(child));
