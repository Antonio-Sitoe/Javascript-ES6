// DEFINE PROPERTY - DEFINEPROPERTIES
/* ===============================================================*/

// getters e setters
// uma maneira de proteger a propriedades 

//getter - obter o valor
//seteres - para setar o valor / configurar o valor

function Produto(nome, preco, stock) {
    this.nome = nome;
    this.preco = preco;
    let stockPrivate = stock;

    Object.defineProperty(this, 'stock', {
        enumerable: true,
        configurable: true,
        // metodo getters
        get: function () {
            return stockPrivate;
        },
        set: function (valor) {
            if (typeof valor !== 'number') {
                console.log('bad value')
                return
            }
            stockPrivate = valor
        }
    })
}

const p1 = new Produto('camiseta', 20, 300);

console.log(p1)
/* ===============================================================*/

// geralmente o trabalho do getter e pegar o valor e te mostrar
console.log(p1.stock)

/* ===============================================================*/
p1.stock = 500;

console.log(p1.stock)


/* ===============================================================*/


function CriaProduto(nome) {
    return {
        get nome() {
            return nome
        },
        set nome(valor) {
            nome = valor
        }
    }
}

const p3 = CriaProduto('CAMISETA')
p3.nome = 'tem alguma coisa'
console.log(p3.nome)

/* ===============================================================*/
/* ===============================================================*/
/* ===============================================================*/
/* ===============================================================*/