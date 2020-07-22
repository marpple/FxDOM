import { each } from "fxjs2";
import __el_spec__ from "./suits/el.spec.js";

each((spec) => spec({ describe, it }), [__el_spec__]);
