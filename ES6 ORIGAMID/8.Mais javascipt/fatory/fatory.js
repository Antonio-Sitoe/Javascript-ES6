function createButton(text, element, background) {
  return Object.freeze({
    text,
    elements() {
      const button = document.createElement(element);
      button.style.background = background;
      button.innerText = text;
      return button;
    },
    apend() {
      const child = this.elements;
      document.body.appendChild(child);
    },
  });
}

const btn = createButton('comprar', 'button', '#fb5');
const moo = createButton('vender', 'button', '#030303');
btn.text = 'ds';
console.log(btn);

console.log(moo);
