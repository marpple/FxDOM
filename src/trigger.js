const me = "MouseEvents";
const mouseEvents = {
  click: me,
  mousedown: me,
  mouseup: me,
  mousemove: me,
};

export default function (event, props, el) {
  if (!el) {
    el = props;
    props = {};
  }

  if (event instanceof Event) {
    el.dispatchEvent(event);
    return el;
  }

  if (event == "submit") return el.submit(), el;
  let e = document.createEvent(mouseEvents[event] || "Events");
  var bubbles = true;
  for (var name in props)
    name == "bubbles" ? (bubbles = !!props[name]) : (e[name] = props[name]);
  e.initEvent(event, bubbles, true);
  el.dispatchEvent(e);
  return el;
}
