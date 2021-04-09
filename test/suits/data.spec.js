import { expect } from "chai";
import $dataStr from "../../src/dataStr.js";
import $el from "../../src/el.js";
import $data from "../../src/data.js";
import $setAttr from "../../src/setAttr.js";
import { html } from "fxjs/es";

describe(`data`, function () {
  it(`Get and parse normal stringified object data from 'data-fx-json' attribute.`, function () {
    // given
    const data = {
      n: 1,
      str: "string",
    };
    const el = $el(html`<div></div>`);
    $setAttr({ "data-fx-json": JSON.stringify(data) }, el);

    // when
    const $output = $data(el);

    // then
    expect($output).to.deep.equal(data);
  });

  it(`Get and parse stringified object using dataStr from 'data-fx-json' attribute.`, function () {
    // given
    const data = {
      n: 1,
      str: `First Line. 'apple', "banana"
        !@#$%^&*()_//\\/
      `,
    };

    // when
    const data_el = $el(html`<div data-fx-json="${$dataStr(data)}"></div>`);
    const $output = $data(data_el);

    // then
    expect($output).to.deep.equal(data);
  });
});
