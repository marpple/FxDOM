import { curry } from "fxjs/esm";

export default curry((parent, child) =>
  parent.insertBefore(child, parent.firstChild)
);
