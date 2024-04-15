import css from "./css.js";
import cssF from "./_internal/_cssF.js";
import show from "./show.js";
import hide from "./hide.js";
import { navigator_wrapper } from "./_internal/_browser.js";

const isIE = /trident/i.test(navigator_wrapper.userAgent || '');

function getBorderBoxValue(Left, Right, el) {
  return (
    cssF("border" + Left + "Width", el) +
    cssF("border" + Right + "Width", el) +
    cssF("padding" + Left, el) +
    cssF("padding" + Right, el)
  );
}

export default function elWidth(el, prefix = "", isHeight) {
  const [width, Left, Right] = isHeight
    ? ["height", "Top", "Bottom"]
    : ["width", "Left", "Right"];
  const isHidden = css("display", el) === "none" && show(el);
  const isBorderBox = css("boxSizing", el) === "border-box";
  const isOnlyWidth = !prefix;
  const needCalcBorderBoxValue =
    (isIE && isBorderBox) ||
    (!isOnlyWidth && !isBorderBox) ||
    (isOnlyWidth && isBorderBox);
  const borderBoxValue = needCalcBorderBoxValue
    ? getBorderBoxValue(Left, Right, el)
    : 0;

  let value = cssF(width, el);
  if (isIE && isBorderBox) value += borderBoxValue;

  if (isOnlyWidth) {
    if (isBorderBox) value -= borderBoxValue;
  } else {
    if (!isBorderBox) value += borderBoxValue;
    if (prefix == "outer")
      value += cssF("margin" + Left, el) + cssF("margin" + Right, el);
  }

  isHidden && hide(el);

  return value;
}
