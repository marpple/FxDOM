const defaultDisplays = {};

export default function getDefaultDisplays(el) {
  var nodeName = el.nodeName, display = defaultDisplays[nodeName];
  if (display) return display;

  var temp, doc = el.ownerDocument;
  temp = doc.body.appendChild(doc.createElement(nodeName));
  display = css('display', temp);
  temp.parentNode.removeChild(temp);

  if (display == 'none') display = 'block';
  return defaultDisplays[nodeName] = display;
}