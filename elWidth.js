import css from './css.js';
import cssF from '.internal/_cssF.js';
import show from './show.js';

export default function elWidth(el, prefix = '', isHeight) {
  if (isHeight) var width = 'height', Left = 'Top', Right = 'Bottom';
  else width = 'width', Left = 'Left', Right = 'Right';

  const hide = css('display', el) == 'none' && show(el);

  let res = cssF(width, el);
  const isBorderBox = css('boxSizing', el) == 'border-box';
  const borderBoxVal = (prefix && !isBorderBox) || (!prefix && isBorderBox) ?
    cssF('border'+Left+'Width', el) +
    cssF('border'+Right+'Width', el) +
    cssF('padding'+Left, el) +
    cssF('padding'+Right, el) : 0;
  res += prefix ? borderBoxVal : -borderBoxVal;
  if (prefix == 'outer') res += cssF('margin'+Left, el) + cssF('margin'+Right, el);

  hide && hide(el);

  return res;
}