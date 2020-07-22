import { expect } from "chai";
import el from "../../el.js";

export default ({ describe, it }) => [
  describe(`el`, function () {
    it(`입력한 태그 문자열에 대응하는 DOM 객체를 반환한다.`, function () {
      const input = `<h1>FxDOM</h1>`;

      const $output = el(input);

      expect($output.tagName.toLowerCase()).equal("h1");
    });
  }),
];
