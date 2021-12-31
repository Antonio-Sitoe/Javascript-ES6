//  weekmap - e um objeto, similar ao map, que permite apenaas chaves do tipo objet e mantem as referencias de forma fraca, sendo volatil e nao iteravel
// nao e iteravel - e nao garante a permanencia da dos elementos la dentro
// se perdemos o valor para chaves
const wm1 = new WeakMap();

// operacoes -

// 1 -   set
const obj = {};
const obj2 = {};

wm1.set(obj, "object");
wm1.set(obj2, "object2");

// has
console.log(wm1.has(obj));

//get - retone o valor
console.log(wm1.get(obj));
console.log(wm1.get(obj2));

//delete - remove um par de chaves e valores - retorna um boleann

console.log(wm1.delete(obj));
console.log(wm1.delete(obj2));

console.log(wm1);

//para que serve o weekmap - 

