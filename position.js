import {extend, go} from "fxjs2";
import css from './css.js';
import offset from "./offset.js";
import offsetParent from './offsetParent.js';
const docEl = document.documentElement;

const setPositionTopLeft = (el, { top, left }, { pTop = 0, pLeft = 0 }) => ({
  top: top - pTop - parseFloat(css('marginTop', el)) + docEl.clientTop,
  left: left - pLeft - parseFloat(css('marginLeft', el)) + docEl.clientLeft
});

export default el => {
  if (css('position', el) === 'fixed')
    return setPositionTopLeft(el, el.getBoundingClientRect(), {});
  const { top, left } = offset(el);
  const offsetParent$ = offsetParent(el);
  const { clientTop, clientLeft } = offsetParent$;
  if (offsetParent$.nodeName.toUpperCase() === 'HTML')
    return setPositionTopLeft(el, { top, left }, { pTop: clientTop, pLeft: clientLeft });
  const { top: pTop, left: pLeft } = offset(offsetParent$)
  return setPositionTopLeft(el, { top, left }, { pTop: pTop + clientTop, pLeft: pLeft + clientLeft });
};

//
// export default el => go(
//     extend(...(css('position', el) === 'fixed' ?
//       [
//         { pTop: 0, pLeft: 0 }, el.getBoundingClientRect()
//       ] : [
//         offset(el),
//         go(
//           offsetParent(el),
//           offsetParent$ => [
//             offsetParent$.nodeName.toUpperCase() !== 'HTML' ?
//             offset(offsetParent$) : { top: 0, left: 0 },
//             offsetParent$
//           ],
//           ([{ top, left }, { clientTop, clientLeft }]) => ({
//             pTop: top + clientTop,
//             pLeft: left + clientLeft
//           })
//         )
//       ]
//     )),
//     ({ top, left, pTop, pLeft }) => ({
//       top: top - pTop - parseFloat(css('marginTop', el)) + docEl.clientTop,
//       left: left - pLeft - parseFloat(css('marginLeft', el)) + docEl.clientLeft
//     })
//   );
//
//
// export default el => {
//   const {
//     offset: { top, left }, pTop = 0, pLeft = 0
//   } = css('position', el) === 'fixed' ?
//     {
//       offset: el.getBoundingClientRect(),
//     } : go(
//       offsetParent(el),
//       offsetParent$ => {
//         const [{ top = 0, left = 0 }, { clientTop, clientLeft }] = [
//           offsetParent$.nodeName.toUpperCase() !== 'HTML' ? offset(offsetParent$) : {},
//           offsetParent$
//         ];
//         return {
//           offset: offset(el), pTop: top + clientTop, pLeft: left + clientLeft
//         };
//       }
//     );
//   return {
//     top: top - pTop - parseFloat(css('marginTop', el)) + docEl.clientTop,
//     left: left - pLeft - parseFloat(css('marginLeft', el)) + docEl.clientLeft
//   };
// }
//
// export default el => {
//   const is_fixed = css('position', el) === 'fixed';
//   const { top, left } = is_fixed ? el.getBoundingClientRect() : offset(el);
//   const { pTop, pLeft } = is_fixed ? {} : (offsetParent$ => {
//     const { clientTop: pTop, clientLeft: pLeft } = offsetParent$;
//     if (offsetParent$.nodeName.toUpperCase() === 'HTML') return { pTop, pLeft };
//     const { top, left } = offset(offsetParent$)
//     return { pTop: top + pTop, pLeft: left + pLeft };
//   })(offsetParent(el));
//
//   return {
//     top: top - pTop - parseFloat(css('marginTop', el)) + docEl.clientTop,
//     left: left - pLeft - parseFloat(css('marginLeft', el)) + docEl.clientLeft
//   };
// }
