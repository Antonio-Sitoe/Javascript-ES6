//Prototipo e uma propriedade das funcoes
//essa propriedade e um objecto que retorna nela

// function pessoa(nome, idade) {
//    this.nome = nome;
//    this.idade = idade;
//    this.andar = function () {
//       this.nome + " andou pelo objecto"
//    }
// }
// pessoa.prototype.andar = function () {
//    return this.nome + ' andou'
// }
// pessoa.prototype.nadar = function () {
//    return this.nome + ' nadou'
// }
// const nome = new pessoa("tony", 20)
// // console.log(pessoa.prototype)
// // console.log(nome.nadar())

// const pais = "Moz";
// const cidade = new String()

// const lista = ['gato', 'cavalo', 'cachoro']

// const listaArrar = Array.from(lista)

// const carro = {
//    marca: 'ford',
//    preco: 200,
//    andar() {
//       return true
//    }
// }

function pessoa(nome, idade) {
   this.nome = nome;
   this.idade = idade
}

pessoa.prototype.nomeDaPessoa = function() {
   return this.nome
}


const novaPessoa = new pessoa("Antonio Sitoe", 20)

console.log(novaPessoa.nomeDaPessoa())



function pessoa(nome,sobrenome ,idade) {
   this.nome = nome;
   this.sobrenome =sobrenome;
   this.idade = idade
}

pessoa.prototype.nomeDaPessoa = function() {
   return this.nome + this.sobrenome
}

const novaPessoa = new pessoa("Antonio Manuel", " Sitoe",20)

console.log(novaPessoa.nomeDaPessoa())


//NODELIST
// entries()
// forEach: ƒ forEach()
// item: ƒ item()
// keys: ƒ keys()
//  values()

//HTMLCOLLECTION
// item: ƒ item()
// length: (...)
// namedItem: ƒ namedItem()
// constructor: ƒ HTMLCollection()
// Symbol(Symbol.iterator): ƒ values()
// Symbol(Symbol.toStringTag): "HTMLCollection"

const li = document.querySelector('li')
li //HTMLLIElement"
li.click;//  funcao
li.innerText;  //string
li.value; //number
li.offsetTop;//number




// li.hidden.construtor.name //string
















