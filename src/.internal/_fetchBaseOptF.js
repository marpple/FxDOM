import { defaults } from "fxjs/es";

const fetchBaseOpt = {
  headers: { "Content-Type": "application/json" },
  credentials: "same-origin",
};

export default (headers) =>
  headers
    ? defaults(
        {
          headers: defaults(headers, fetchBaseOpt.headers),
        },
        fetchBaseOpt
      )
    : fetchBaseOpt;
