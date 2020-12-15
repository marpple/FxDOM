import { curry, go } from "fxjs/esm";
import fetchBaseOptF from "./.internal/_fetchBaseOptF.js";
import resJSON from "./.internal/_resJSON.js";
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
