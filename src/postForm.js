import { curry, go } from "fxjs/esm";

export default curry((url, form_el) =>
  go(
    new FormData(form_el),
    (form) => fetch(url, { method: "POST", body: form }),
    (res) => (res.ok ? res.json() : Promise.reject(res))
  )
);
