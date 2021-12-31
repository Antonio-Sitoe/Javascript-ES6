// o get significa que podemos transformar o object em forma de propriedade

//set - voce set a propriedade
const button = {
  // get transforma um metodo em propriedade e tranca o mesmo
  // nao da para mudar esse method uma vez colocado o get

  get tamanho() {
    return this._numero || 100;
  },
  // o set  entrega  o possibilidade de
  // o set vc vai utilizar ou influenciar diretamante ou influenciar outras propriedades
  set tamanho(value) {
    return (this._numero = value);
  },
};

const frutas = {
  lista: [],
  set nova(fruta) {
    this.lista.push(fruta);
  },
};

frutas.nova = "banana";

class Button {
  constructor(text, color) {
    this.text = text;
    this.color = color;
  }

  get element() {
    const type = this.elementType || "button";
    const buttonElement = document.createElement(type);
    buttonElement.innerText = this.text;
    buttonElement.style.background = "blue";
    buttonElement.style.color = this.color;
    return buttonElement;
  }

  set element(type) {
    this._elementType = type;
  }
}

const butao = new Button("comprar", "whitesmoke");
