// um objecto que armazena elementos

const charchets = new Set(["html", "utf-8", "iso-8859"]);
// podemos passar um array contendo elementos
//podemos usar o array .from para retoenar a um array.

//size - retona o total dos elementos
console.log(charchets.size);

// add- adicionamos novos elementos

charchets.add("ASCII");
charchets.add("javascript");

//foraeach - iterra
// charchets.forEach((charchet) => {
//   console.log(charchet);
// });

// has -- retorna um bolean se existe ou nao

console.log(charchets.has("javascript"));

//delete - remove um determinado elemeneot e retona true ou false

console.log(charchets.delete("javascript"));

console.log(charchets.has("javascript"));

//clear() - apaga todos elemenentos
console.log(charchets.clear());
console.log(charchets);

// a diferenca de um set para umarray - ea nao permite elementos duplicados

const arr = [];
arr.push(10);
arr.push(10);
arr.push(20);
arr.push(20);

console.log(arr.length); //4

const set = new Set();
set.add(10);
set.add(10);
set.add(10);

console.log(set.size); //1

//set nao permite elementos duplicados

const arry = [10, 10, 20, 10, 3, 10];

//usamos o set para ilimar a dupicacao de um array;

const obj = {};
const sety = new Set(arr);

console.log(arry);
console.log(sety);
