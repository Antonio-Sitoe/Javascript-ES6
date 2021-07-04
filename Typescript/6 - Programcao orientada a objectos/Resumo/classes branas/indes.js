// CLASSES SAO UM TIIPO DE CONSTRUTOR DE OBJTCTOS

// class declaration
// class Squary {}
class shape {
  constructor() {

  }
}
// class expression
const Person = class extends shape {
  // as classes  sao formadas por 3 tipos diferentes de menbros
  constructor(side) {
    super();
    this.argume = arguments;

    this.side = side;
  }
  //metodo dos prototipos - elas dependem da existencad e um obejto

  toString() {
    return this.argume;
  }

  //static methotd 0 nao dependem da instancia e elas podem ser uteis

  static fromArea() {
    return Math.sqrt(this.side);
  } // nao depende da existencia de um objecto
};

// as classes nao sofrem  o hosting - por isso importa a forma como elas foram declaradas;

const person = new Person(5);

Person.fromArea(4);

//  ** as classes funcionam de form similar as funcoes construtoras

// function Squary(side) {
//   this.side = side;
// }
// Squary.prototype.calculete = function () {
//   return Math.pow(this.side, 2);
// };
// Squary.prototype.toString = function () {
//   return this.side + " area:" + this.calculete();
// };


//com extends - teremos  a heranca

class Circle extends shape {
  construtor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  static fromArea(area) {
    return new Circle(area / Math.PI);
  }
}

const circle = new Circle(3, 14526);


// as herancas sao a grande vantagem de uar classes porque vc tem uma sintaxe mais amilgavel e intuituvas