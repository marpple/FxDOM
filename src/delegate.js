import { tap, go, each, defaults } from "fxjs/es";
import filterL from "fxjs/es/Lazy/filterL.js";
import contains from "./contains.js";
import findAll from "./findAll.js";

export default (event, sel, f) =>
  tap((el) =>
    el.addEventListener(event, (e) =>
      go(
        el,
        findAll(sel),
        filterL(contains(e.target)),
        each((currentTarget) =>
          f(
            defaults({ originalEvent: e, currentTarget, delegateTarget: el }, e)
          )
        )
      )
    )
  );
