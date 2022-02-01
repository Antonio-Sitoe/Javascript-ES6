// Construtor functions

// function Button(text, background) {
//   this.text = text;
//   this.background = background;
// }

// Button.prototype.element = function () {
//   const btn = document.createElement('button');
//   btn.innerText = this.text;
//   btn.style.background = this.background;
//   return btn;
// };

// Button.prototype.append = function () {
//   return document.body.appendChild(this.element());
// };

// class Button {
//   constructor(text, background) {
//     this.text = text;
//     this.background = background;
//     return document.body.appendChild(this.element());
//   }
//   element() {
//     const btn = document.createElement('button');
//     btn.innerText = this.text;
//     btn.style.background = this.background;
//     return btn;
//   }

//   static create(text, background) {
//     const btn = document.createElement('button');
//     btn.innerText = text;
//     btn.style.background = background;
//     return btn;
//   }
// }
// const blueButton = new Button('comprar', '#fbe');
// const grey = new Button('cancelar', '#fb5');

// const bt = Button.create('texti', 'blue');
// console.log(bt);
import Coutdown from './coutdown.js';

const countdown = new Coutdown('feb 1 2022 11:38:59 GMT+2');

const m = document.querySelector('.m');
let mi =setInterval(() => {
  if (!countdown.total.hours) {
    m.innerText = `Horas ${countdown.total.hours}:${countdown.total.minuts}:${countdown.total.seconds}`;
  } else {
    console.log('fechou')
    clearInterval(mi);
  }
}, 1000);
