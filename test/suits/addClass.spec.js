import { expect } from "chai";
import { html } from "fxjs/es";
import addClass from "../../src/addClass.js";
import el from "../../src/el.js";

export default ({ describe, it }) => [
  describe(`addClass`, function () {
    it(`반환값은 입력한 엘리먼트이다.`, function () {
      // given
      const $el = el(html`<div></div>`);
      const class_names = "a";

      // when
      const $output = addClass(class_names, $el);

      // then
      expect($output).equal($el);
    });

    it(`입력한 클래스명을 입력한 엘리먼트에 부여한다.`, function () {
      // given
      const $el = el(html`<div></div>`);
      const class_name = "a";

      // when
      addClass(class_name, $el);

      // then
      expect($el.classList.contains(class_name)).true;
    });

    it(`여러 클래스명을 입력할 경우 공백으로 분리하여 각각 입력한 엘리먼트에 부여한다.`, function () {
      // given
      const $el = el(html`<div></div>`);
      const class_name1 = "a";
      const class_name2 = "b";
      const class_names = `${class_name1} ${class_name2}`;

      // when
      addClass(class_names, $el);

      // then
      const { classList: class_list } = $el;
      expect(class_list.contains(class_name1)).true;
      expect(class_list.contains(class_name2)).true;
    });
  }),
];
