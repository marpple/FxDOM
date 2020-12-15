import { curry } from "fxjs/esm";

export default curry((child, parent) =>
  parent.insertBefore(child, parent.firstChild)
);
