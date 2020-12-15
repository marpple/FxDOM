import { curry, go } from "fxjs/esm";
import fetchBaseOptF from "./_fetchBaseOptF.js";
import resJSON from "./_resJSON.js";

export default (method) =>
  curry((url, data, headers) =>
    go(
      fetch(
        url,
        Object.assign(
          {
            method,
            body: JSON.stringify(data),
          },
          fetchBaseOptF(headers)
        )
      ),
      resJSON
    )
  );
