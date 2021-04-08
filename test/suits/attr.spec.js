import { expect } from "chai";
import { html } from "fxjs/es";
import attr from "../../src/attr.js";
import el from "../../src/el.js";

describe(`attr`, function () {
  it(`입력한 엘리먼트의 입력 속성에 대한 값을 반환한다.`, function () {
    // given
    const $el = el(html`<input type="text" name="sample" />`);
    const key = "name";
    const expect_value = "sample";

    // when
    const actual_value = attr(key, $el);

    // then
    expect(actual_value).equal(expect_value);
  });

  it(`해당 속성이 없는 경우 null 또는 빈 문자열을 반환한다.`, function () {
    // given
    const $el = el(html`<input type="text" name="sample" />`);
    const key = "value";
    const expect_values = ["", null];

    // when
    const actual_value = attr(key, $el);

    // then
    expect(actual_value).oneOf(expect_values);
  });
});
