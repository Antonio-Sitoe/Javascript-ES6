//  * Produto
//  camisetas  - cor /  canecas - material /    lapis

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function (quantia) {
    return this.preco += quantia
}
Produto.prototype.desc = function (quantia) {
    return this.preco += quantia
}
const produto = new Produto('pr', 6)

/* Especializar a funcao produto */
function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco)
    this.cor = cor;
}
Camiseta.prototype.aumento = function (percentual) {
    return this.preco = this.preco * (this.preco * (percentual / 100))
}
//camiseta deve ter o mesmo prototype de camiseta e nao de produto
// Camiseta.prototype = Object.create(Produto.prototype)

//podemos usar o spread operator
Camiseta.prototype = {
    ...Produto.prototype
}
// deixe jeito estamos a colocar o prototipe para
// o camiseta
Camiseta.prototype.construtor = Camiseta;
const camiseta = new Camiseta('Adidas', 960, 'preta')
// console.log(camiseta.prototype.construtor)
function Caneca(nome, preco, material, stock) {
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'stock', {
        enumerable: true,
        configurable: false,
        get: function () {
            return stock
        },
        set: function (valor) {
            if (typeof valor !== 'number') return
            stock = valor
        }

    })
}
Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.construtor = Caneca;

Caneca.prototype.bigginIn = function () {
    return this.material.slice(0, 3)
}
const caneca = new Caneca('Tapewere', 300, 'porcelana', 5)
console.log(caneca)