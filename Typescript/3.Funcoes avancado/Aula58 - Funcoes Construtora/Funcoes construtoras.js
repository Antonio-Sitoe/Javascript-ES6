/* 

funcao construtora e uma funcao normal mas faz 
referencia a ela mesma com o this, e para chamar
 vamos usar a palavra chave new. 
 
 sempre que for Construtora comeca com letra maiuscula 
 isso e so um padrao para mostrar que e  uma funcao contrutora

 o new e sempre responsavel por criar um novo objecto
  aseada na funcao que passsamos  a frente dela 

 */


function Carro(marca, preco) {
    this.marca = marca;
    this.preco = preco;
}

const honda = new Carro('honda', 1500);
const fiat = new Carro('fiat', 600);
//honda e um objecto que vem do construtor carro




// //

//o new 
// * cria um novo objecto   honda = {}
// * define o prototipo   honda.prototype = carro.prototipe
// * aponta o this para o honda     this.honda

//  * no final ele retona um novo objecto.


//ainda podemos definir parametros e argumanrots

//o this faz referencia ao objecto construido



function Carro2(marca, precoInicial) {
    this.taxa = 1.2;
    this.marca = marca;
    this.precoInicial = precoInicial

    this.preco = this.precoFinal();
}

// console.log(this)
Carro2.prototype.precoFinal = function () {
    return this.precoInicial * this.taxa;
}


const mazda = new Carro2('mazda', 5000)
console.log(mazda)










// const Dom = {
//     selector: 'li',
//     class:'ativo',
//     element() {
//        return document.querySelector(this.selector)
//     },
//     ativar(){
//         this.element().classList.add(this.class)
//     }
// }


function Dom(selector, classe) {
    this.classe = classe;


    this.element = function () {
        return document.querySelector(selector)
    };

    this.elementos = function () {
        return document.querySelectorAll(selector)
    };

    this.ativarUm = function () {
        this.element().classList.add(this.classe)
    }

    this.ativarTodos = function () {
        this.elementos().forEach((elemento => elemento.classList.toggle(this.classe)))
    }

}

function ativouBody() {
    const body = new Dom('body', 'ative')
    body.ativarUm()
}


function ativarMuitos() {
    const lis = new Dom('li', 'ativar')
    lis.ativarTodos()
}


function Modal() {
    const modal = new Dom('.modal', 'ative')
    modal.ativarUm()
}

// sempre lembre se de usar parametros;
//



// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
    nome: 'Nome pessoa',
    idade: 0,
    andar() {
        console.log(this.nome + ' andou');
    }
}

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.andar = function () {
        console.log(this.nome + ' andou')
    }
}


const joao = new Pessoa('Joao', 20)
const Maria = new Pessoa('Maria', 25)
const Bruno = new Pessoa('Bruno', 15)
// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos



// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos


function Doms(select, classe) {
    this.elements = function () {
        return document.querySelectorAll(select);
    };

    this.addClass = function () {
        return this.elements().forEach(item => item.classList.add(classe))
    }
    this.removeClass = function () {
        return this.elements().forEach(item => item.classList.remove(classe))
    }
}


const lista = new Doms('li', 'ative');
lista.addClass()


lista.removeClass()


// listaItens.addClass('ativar');
// ul.addClass('ativar-ul')