import { expect } from "chai";
import { html } from "fxjs/es";
import el from "../../src/el.js";
import find from "../../src/find.js";
import siblings from "../../src/siblings.js";

describe("siblings", function () {
  it("부모의 자식들을 반환한다.", function () {
    const parent_el = el(html`
      <div class="parent">
        <div class="child one"></div>
        <div class="child two"></div>
        <div class="child me"></div>
        <div class="child three"></div>
      </div>
    `);

    const me_el = find(".me", parent_el);

    const silbing_els = siblings(me_el);

    silbing_els.map((sibling_el) => {
      expect(sibling_el.parentNode).to.equal(parent_el);
    });
  });

  it("본인 엘리먼트는 제외한다.", function () {
    const parent_el = el(html`
      <div class="parent">
        <div class="child one"></div>
        <div class="child two"></div>
        <div class="child me"></div>
        <div class="child three"></div>
      </div>
    `);

    const me_el = find(".me", parent_el);

    const silbing_els = siblings(me_el);

    expect(silbing_els).not.includes(me_el);
  });

  it("셀렉터에 해당하는 형제들만 반환한다.", function () {
    const parent_el = el(html`
      <div class="parent">
        <div class="child one"></div>
        <div class="child two"></div>
        <div class="child me"></div>
        <div class="child three"></div>
      </div>
    `);

    const me_el = find(".me", parent_el);

    const one_el = find(".one", parent_el);
    const two_el = find(".two", parent_el);
    const three_el = find(".three", parent_el);

    const silbing_els = siblings(".one", me_el);

    expect(silbing_els).includes(one_el);
    expect(silbing_els).not.includes(two_el);
    expect(silbing_els).not.includes(three_el);
  });
});
