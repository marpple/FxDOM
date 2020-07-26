import { tap, isString, go, each } from "fxjs2";
import findAll from "../findAll.js";

export default (method) => (event, sel, f, ...opts) =>
  tap((el) =>
    isString(sel)
      ? go(
          el,
          findAll(sel),
          each((el) => el[method](event, f, ...opts))
        )
      : el[method](event, sel, ...[f, ...opts])
  );
