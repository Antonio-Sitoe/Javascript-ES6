// weekset  e um objecto, similar ao set, que permite apenas valores do tip object, e mantem as referencias de forma fraca sendo volatil e nao iteravel

// nao existe garantia de que os eementos estao de facto la dentro

const ws1 = new WeakSet();

//operacoes

// add -   adiciona um element

const obj = {};
const obj2 = {};

ws1.add(obj);
ws1.add(obj2);

// has - retorna true caso o elemento exista
console.log(ws1.has(obj));
// se tetar colocar outro tipo de dado que ao seja object-  vai dar um erro
// apenas objtc

// delete - remoe u elemento -

console.log(ws1.delete(obj2));

console.log(ws1.has(obj2));

// para que serve o weekset - serve para criar


const Cirlcles = new WeakSet();


function Circle(radius) {
    circles.add(this)
  this.radius = radius;
}

Circle.prototype.Calculete = function () {
  return Math.PI * Math.pow(this.radius, 2);
};

const circle2 = {
  radius: 5,
};

const circle = new Circle(1.5);

console.log(circle.Calculete.call(circle2));
