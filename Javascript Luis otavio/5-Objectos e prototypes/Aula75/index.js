// a funcao construtora tem o object.prototype que vem numa chave (_proto_)
const ObjectA = {
    chaveA: 'A'
};

const ObjectB = {
    chaveB: 'B'
};

Object.setPrototypeOf(ObjectB, ObjectA)
// setar as chaves que estao no prototipo do objecto A para o objecto B

console.log(ObjectB.chaveA)

const objectC = new Object();
objectC.chaveC = 'c',
    Object.setPrototypeOf(ObjectA, objectC)
Object.setPrototypeOf(ObjectB, objectC)
console.log(objectC)





function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.Disconto = function (desconto) {
    return this.preco = this.preco - (this.preco * (desconto / 100))
}
Produto.prototype.AumntaPreco = function (desconto) {
    return this.preco += (this.preco * (desconto / 100))
}
const pessoa = new Produto('camisa', 60);
// console.log(pessoa.AumntaPreco(10))
const p2 = {
    nome: 'caneca',
    preco: 15
}

Object.setPrototypeOf(p2, Produto.prototype)
// deixe jeito estamos a setar o prototipo do produto e transferir para o novo objecto

const p3 = Object.create(Produto.prototype, {nome:'ola Mundo', preco:25})

console.log(p3.AumntaPreco(20))