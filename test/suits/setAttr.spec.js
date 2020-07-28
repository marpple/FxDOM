import { expect } from "chai";
import { go } from "fxjs2";
import el from "../../src/el.js";
import setAttr from "../../src/setAttr.js";

export default ({ describe, it }) => [
  describe('setAttr', function () {
    it('인자로 전달 받은 element를 반환한다.', function () {
      const $anchor = el(`<a>Marpple Home</a>`);
      expect(setAttr({ href: 'https://www.marpple.com' }, $anchor)).to.equal($anchor);
    });

    it('주어진 key-value pair를 attribute로 할당한다.', function () {
      const href = 'https://www.marpple.com';
      go(
        el(`<a>Marpple Home</a>`),
        setAttr(['href', href]),
        $el => expect($el.attributes.href.nodeValue).to.equal(href)
      );
    });

    it('주어진 Object의 entry들을 attribute로 할당한다.', function () {
      const href = 'https://www.marpple.com';
      const target = '_blank';
      go(
        el(`<a>Marpple Home</a>`),
        setAttr({ href, target }),
        $el => {
          expect($el.attributes.href.nodeValue).to.equal(href);
          expect($el.attributes.target.nodeValue).to.equal(target);
        }
      );
    });
  }),
];
