import { curry } from "fxjs/es";

const idCreator = (_) => {
  let i = 0;
  return (_) => "fxdom-id-" + i++;
};

const createId = idCreator();

export default (qs) =>
  curry((sel, el) => {
    const id = el.id;
    el.id = id || createId();
    const res = el[qs](
      "#" + el.id + (sel[0] == "&" ? sel.substr(1) : " " + sel)
    );
    if (!id) el.removeAttribute("id");
    return res;
  });
