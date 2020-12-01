export default function contents(el) {
  return (
    el.contentDocument || (el.content ? el.content.childNodes : el.childNodes)
  );
}
