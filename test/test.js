import { each } from "fxjs2";
import __addClass_spec__ from "./suits/addClass.spec.js";
import __el_spec__ from "./suits/el.spec.js";

each((spec) => spec({ describe, it }), [__addClass_spec__, __el_spec__]);
