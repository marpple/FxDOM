import { expect } from "chai";
import $dataStr from "../../src/dataStr.js";
import el from "../../src/el.js";
import $attr from "../../src/attr.js";
import $parseDataStr from "../../src/parseDataStr.js";
import { html } from "fxjs/es";

describe(`parseDataStr`, function () {
  it(`Parse stringified json data at html attribute`, function () {
    // given
    const data = {
      n: 1,
      str: `First Line. 'apple', "banana"`,
    };

    // when
    const data_el = el(html`<div data-storage="${$dataStr(data)}"></div>`);
    const $output = $parseDataStr($attr("data-storage", data_el));

    // then
    expect($output).to.deep.equal(data);
  });
});
