export default function outsideClick(element, event, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';
  if (!element.hasAttribute(outside)) {
    event.forEach((e) => {
      setTimeout(() => {
        html.addEventListener(e, handleOutsideClick);
      }, 0);
    });
    element.setAttribute(outside, '');
    function handleOutsideClick(e) {
      if (!element.contains(e.target)) {
        element.removeAttribute(outside);
        event.forEach((e) => {
          html.removeEventListener(e, handleOutsideClick);
        });
        callback();
      }
    }
  }
}
