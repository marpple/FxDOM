import remove from './remove.js';
import $each from './each.js';

const
  fragmentRE = /^\s*<(\w+|!)[^>]*>/,
  table = document.createElement('table'),
  tableRow = document.createElement('tr'),
  div = document.createElement('div'),
  containers = {
    'tr': document.createElement('tbody'),
    'tbody': table, 'thead': table, 'tfoot': table,
    'td': tableRow, 'th': tableRow
  };

export default html => {
  html = html.trim();
  const name = fragmentRE.test(html) && RegExp.$1;
  const container = containers[name] || div;
  container.innerHTML = html;
  return $each(remove, container.childNodes);
};
