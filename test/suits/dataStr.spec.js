import { expect } from "chai";
import $dataStr from "../../src/dataStr.js";
import el from "../../src/el.js";
import $attr from "../../src/attr.js";
import { html } from "fxjs/es";

describe(`dataStr`, function () {
  it(`Stringify object without quotes.`, function () {
    // given
    const data = {
      n: 1,
      str: `First Line. 'apple', "banana"`,
    };
    const expected_result = `$dataStr_{(2)n(2):1,(2)str(2):(2)First Line. (1)apple(1), \\(2)banana\\(2)(2)}`;

    // when
    const $output = $dataStr(data);

    // then expected_result
    expect($output).equal(expected_result);
  });

  it(`Stringified object using data str can be parsed as normal object properly.`, function () {
    // given
    const data = {
      n: 1,
      str: `First Line. 'apple', "banana"`,
    };
    const expected_result = `$dataStr_{(2)n(2):1,(2)str(2):(2)First Line. (1)apple(1), \\(2)banana\\(2)(2)}`;

    // when
    const data_el = el(html`<div data-fx-json="${$dataStr(data)}"></div>`);
    const $output = $attr("data-fx-json", data_el);

    // then
    expect($output).equal(expected_result);
  });
});
