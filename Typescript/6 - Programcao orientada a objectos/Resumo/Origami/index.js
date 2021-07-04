// // Funcoes responsavei pela cracao de objectos, o conceito de uma funcao construtor de objecctos e implementado em outtras linguagens como classes

// function Button(text, bg) {
//   this.text = text;
//   this.bg = bg;
// }

// Button.prototype.element = function () {
//   const btElement = document.createElement("button");
//   btElement.innerText = this.text;
//   btElement.style.background = this.bg;
//   return btElement;
// };
// //criando
// const blueButton = new Button("comprar", "blue"); // retona um objecto

// // AS classes - e considerada uma sintaxe sugal , pois por baixo dos panos continua utilizando o sistema de prototipo s de uma funcao construtora para criar classe;

// class Buttao {
//   constructor(text, bg) {
//     this.text = text;
//     this.bg = bg;
//   }
//   element() {
//     const btElement = document.createElement("button");
//     btElement.innerText = this.text;
//     btElement.style.background = this.bg;
//     return btElement;
//   }
// }

// // Method Construtor - o metodo construtor(argusments0){} e um metodo especia de uma classe, nela voce ira definir todas as propriedades do objecti que sera criado. os argumentos passados em new. vao direto para o construtor;

// class Button {
//     constructor(text, background, color) {
//         this.text = text;
//         this.background = background;
//         this.color = color;
//         return //podemos retornar um elemento ou qualquer coisa
//     }
// }

//this - assim como em uma funcao construtora, this faz referencua ao objecto crado com new, voce pode acessar as propreeadades e etodos da classe utilizandco this.

// class Button {
//   constructor(options) {
//     this.options = options;
//   }
// }

// const options = {
//   color: "white",
//   id: 4,
// };

// const butao = new Button(options);

// console.log(butao);

/*==========    STATIC MATHOD   ===========*/

class Button {
  constructor(text, background, color) {
    this.text = text;
    this.bg = background;
    this.color = color;
  }

  element() {
    const btElement = document.createElement("button");
    btElement.innerText = this.text;
    btElement.style.background = this.bg;
    return btElement;
  }

  static CreateBUtton(text, bg) {
    const button = document.createElement("button");
    button.innerText = text;
    button.style.background = bg;
    return button;
  }

  static blueButton(text) {
    return new Button(text, "black", "white");
  }
}

const butaoAzul = Button.blueButton("comprar");

/*========= retornar a criacao da propria classe =============*/
