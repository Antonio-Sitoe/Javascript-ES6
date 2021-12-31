//prototiipo e um objecto adicionado a funcao quando a mesma e criada

// prototipo e uma propriadade da funcao


function Pessoae(nome, idade) {
   this.nome = nome;
   this.idade = idade
}

const andre = new Pessoae('andre', 28)

// console.log(Pessoae.prototype)

//prototype esta so na funcao sempre;
//asssim podemos adicionar metodos no prototipe da funcao
//podemos adicionar cada metodos que estivemos a precisar 


//a diferenca de criar um objecto novo na raiz ou colocar fora com 
// o prototype e que toda vez que eu for a criar um objecto novo
// a se fomos a colocar na raiz sera criada uma nova funcao e quando colocamos no prototype so vai criar uma vezz a funcao que o objecto novo so vai ter como aceder;


//primeiro verifica dentro do objecto depois vai no prototipo
// _proto_ e o prototipo criado
// e trabalho do navega



Pessoae.prototype.andar = function () {
   return 'pessou andar'
}

andre.andar = function () {
   return ' nova'
}

andre.andar()



// heranca de prototpo 
// O objecti possui acesso aos metodos e propriedades do prototipo do construtor responsael por criar este objecto .
// o objecto abaixo possui acesso a metodos que nunca definimos, mas sao herdados do prototipo de objct

// oque importa sao os metodos que retorna do objecto

Object.prototype;
andre.toString()
andre.isPrototypeOf()



//construtores nativos 

const pais = 'Moz'
const cidade = new String('Maputo')
// tato o pais como cidades todos tem acesso as propriedades e metodos

// e muito comum vc ver coigo a usar funcao directo da array



const list = ['cachoro', 'gato', 'cavalo'];

// UMA NODELIST NAO TEM METODOS DA ARRAY DIRECTO;


// existe uma diferenca do metodo de objeto e metodo do prototipo


const nodelist = document.querySelectorAll('li')
const arrayFrom = Array.from(nodelist)

//esse ARRAY.FROM ESTA LINKADAO DIRECTO E AS OUTRAS PROPRIEDADES DA ARRAY NAO ESTAO;

//ESTAO LINKADOS AO PROTOTIPO;



// console.log(Object.getOwnPropertyNames(Array))

//(6) ["length", "name", "prototype", "isArray", "from", "of"]
//esse getOwnPropertyNames nos ajuda a saber qual e os metodos que existem


// console.log(Object.getOwnPropertyNames(Array.prototype));




//sempre entenda oque esta sendo retornado
// do valor que chamamos orque e apartir do valor e que podemos ter acesso aos metodos e propriedades dele. e cada tipo de dado tem seus metodos e prpriedades;

//uma funcao quando e executada ela retorna um valor entao oque importa e o valor que esta a retornar;







// Crie uma função construtora de Pessoas
function Pessoas(nome, sobrenome, idade) {
   // Deve conter nome, sobrenome e idade
   this.nome = nome;
   this.sobrenome = sobrenome;
   this.idade = idade;
}
// Crie um método no protótipo que retorne
// o nome completo da pessoa

Pessoas.prototype.NomeCompleto = function () {
   return `${this.nome} ${this.sobrenome} `
}


// Liste os métodos acessados por

// dados criados com NodeList,
const nodelistLI = document.querySelectorAll('li')
// HTMLCollection, Document
// ["length", "name", "arguments", "caller", "prototype"] nodelist
// (5) ["length", "name", "arguments", "caller", "prototype"] html colectio 

// Liste os construtores dos dados abaixo


const li = document.querySelector('li');
li;"HTMLLIElement"
li.click; //funcao
li.innerText; //STRING
li.value; //bolean
li.hidden;//bolea
li.offsetLeft; //nmeber
li.click()

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;//string