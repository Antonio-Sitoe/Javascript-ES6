/* ===============================================================*/


// DEFINE PROPERTY - DEFINEPROPERTIES
// a unica diferenca eque um e para uma propriedade e outra para varias
// USAMOS ESSAS FUNCOES PARA TRAVAR OS OBJECTOS

function Produto(nome, preco, stock) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'stock', {
        enumerable: false, // desse jeito podemos ver nas outras funcoes que estao a ser criadas  -> mostra a chave
        value: stock,  // o valor da chave
        writable: false, // posso alterar o valor? controla se o valor pode ser ou nao alteradi
        configurable: false,  // pode apagar ? ou reconfiguravel
    })
}

const p1 = new Produto('camiseta', 20, 300)
delete p1.stock

console.log(Object.keys(p1))

/* ===============================================================*/

// DEFINEPROPERTIES

function Produto(nome, preco, stock) {

    Object.defineProperty(this, 'stock', {
        enumerable: true, // desse jeito podemos ver nas outras funcoes que estao a ser criadas  -> mostra a chave
        value: stock, // o valor da chave
        writable: false, // posso alterar o valor? controla se o valor pode ser ou nao alteradi
        configurable: false, // pode apagar ? ou reconfiguravel
    })

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // desse jeito podemos ver nas outras funcoes que estao a ser criadas  -> mostra a chave
            value: stock, // o valor da chave
            writable: true, // posso alterar o valor? controla se o valor pode ser ou nao alteradi
            configurable: true,
        },
        preco: {
            enumerable: true, // desse jeito podemos ver nas outras funcoes que estao a ser criadas  -> mostra a chave
            value: stock, // o valor da chave
            writable: true, // posso alterar o valor? controla se o valor pode ser ou nao alteradi
            configurable: true,
        }
    })
}

const p1 = new Produto('camiseta', 20, 300)

console.log(Object.keys(p1))





