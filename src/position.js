import css from "./css.js";
import offset from "./offset.js";
import offsetParent from "./offsetParent.js";

const docEl = document.documentElement;

const setPositionTopLeft = (el, { top, left }, { pTop = 0, pLeft = 0 }) => ({
  top: top - pTop - parseFloat(css("marginTop", el)) + docEl.clientTop,
  left: left - pLeft - parseFloat(css("marginLeft", el)) + docEl.clientLeft,
});

export default (el) => {
  if (css("position", el) === "fixed")
    return setPositionTopLeft(el, el.getBoundingClientRect(), {});
  const elOffset = offset(el);
  const offsetParent$ = offsetParent(el);
  const { clientTop, clientLeft } = offsetParent$;
  if (offsetParent$.nodeName.toUpperCase() === "HTML")
    return setPositionTopLeft(el, elOffset, {
      pTop: clientTop,
      pLeft: clientLeft,
    });
  const { top: pTop, left: pLeft } = offset(offsetParent$);
  return setPositionTopLeft(el, elOffset, {
    pTop: pTop + clientTop,
    pLeft: pLeft + clientLeft,
  });
};
