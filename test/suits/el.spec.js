import { expect } from "chai";
import el from "../../el.js";

export default ({ describe, it }) => [
  describe(`el`, function () {
    it(`반환값은 Element 객체이다.`, function () {
      // given
      const input = `<div id="sample">Hello World</div>`;

      // when
      const $output = el(input);

      // then
      expect($output).instanceof(Element);
    });

    it(`입력한 문자열의 태그에 대응하는 DOM 객체를 반환한다.`, function () {
      // given
      const input = `<h1>FxDOM</h1>`;
      const expect_tag_name = "h1";

      // when
      const $output = el(input);
      const actual_tag_name = $output.tagName.toLowerCase();

      // then
      expect(actual_tag_name).equal(expect_tag_name);
    });

    it(`입력으로 HTML 형식의 문자열이 아닌 태그 이름을 넣으면 해당 태그의 DOM 객체를 반환한다.`, function () {
      // given
      const tag_name = "span";

      // when
      const $output = el(tag_name);
      const actual_tag_name = $output.tagName.toLowerCase();

      // then
      expect(actual_tag_name).equal(tag_name);
    });

    it(`여러 태그가 있는 (형제 관계로) HTML 문자열을 입력하면 첫 번째 태그에 해당하는 문자열에 대응하는 DOM 객체만 반환한다.`, function () {
      // given
      const input = `
        <div class="A">에이</div>
        <div class="B">비</div>
      `;
      const expect_tag_name = "div";
      const expect_class_attr = "A";
      const expect_text = "에이";

      // when
      const $output = el(input);
      const actual_tag_name = $output.tagName.toLowerCase();
      const actual_class_attr = $output.getAttribute("class");
      const actual_text = $output.textContent;

      // then
      expect(actual_tag_name).equal(expect_tag_name);
      expect(actual_class_attr).equal(expect_class_attr);
      expect(actual_text).equal(expect_text);
    });
  }),
];
