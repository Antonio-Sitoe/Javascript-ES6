// function Create(name) {
//     this.name = name;
// }

// Create.prototype.school = 'ITC';

// Create.prototype.foiA = function (data) {
//     return `${this.name} foi a ${this.school} ${data}`
// }

// const create = new Create('Antonio', 'ITC');

// console.log(create.foiA('ONTE'))

// function Prof(name, disciplina, idade) {
//     Create.call(this, name)
//     this.disciplina = disciplina;
//     this.idade = idade;
// }


// const prod = new Prof('jOAO MORAUS', 'Matimatica', 26)

// Prof.prototype = Object.create(Create.prototype);
// Prof.prototype.construtor = Prof;


// console.log(prod)



//  json ou javascript object notation, e um formato de intercambio de dados derivado dea linguagem javascript que foi descoberto por douglas Crokford


// Serve para a troca de dados apartir de informacao

// o json aceita number -  string - bolean - Object - array - null

// O metodo JSON.Stringfy - serve para converter u toipo de dado paa json

// console.log(JSON.stringify(10))
// console.log(JSON.stringify('Javascript'))
// console.log(JSON.stringify({name:'self',idade:null}))
// console.log(JSON.stringify({name:'self',idade:null}))

// console.log(JSON.stringify(['10','6']))




// O metodo parse - converte de json para um determinado tipo e dado
console.log(JSON.parse(`"javascript"`))

console.log(JSON.parse('true'))

console.log(JSON.parse(false))

console.log(JSON.parse('{"name":"Antonio", "idade":5}'))