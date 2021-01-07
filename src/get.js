import { curry, go } from "fxjs/es";
import fetchBaseOptF from "./_internal/_fetchBaseOptF.js";
import resJSON from "./_internal/_resJSON.js";
import param from "./param.js";

export default curry((url, data, headers) =>
  go(
    fetch(
      url + (data === undefined ? "" : "?" + param(data)),
      fetchBaseOptF(headers)
    ),
    resJSON
  )
);
