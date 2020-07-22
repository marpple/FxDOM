import { defaults } from "fxjs2";

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
