import { curry } from "fxjs/esm";

export default curry((child, parent) => parent.contains(child));
