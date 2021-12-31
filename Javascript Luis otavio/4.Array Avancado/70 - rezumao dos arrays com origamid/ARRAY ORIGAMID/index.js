// //ARRAY 
// const instrumentos = ['violao', 'baixo', 'guitarra'];
// const carros = new Array('corola', 'mustang', 'honda');

// // console.log(instrumentos[0].toLowerCase())


// carros[3]='ferari';

// carros[20] = 'ratata' //espacos vazios em array deixa array;

// console.log(carros.length)









const frutas = ['legtn', 'maca', 'itens']
console.log(frutas)


//metodos modificadores
const instrumentos = ['guitara', 'baixa', 'viloino']
console.log(instrumentos.sort())
//organiza por ordem alfabetica

//quando um array e de numeros .()
//ele vai de caractere em caracetere
//se for numeros ele nao vai por na orddem de caractere certa

const numeros = [20, 23, 45, 4, 5]
numeros.sort();

//unsshift e push()

numeros.unshift(2);
//estamos a adicionar novo elemento no inicio da array

numeros.push(9)
//estamos a adicionar o 9 na variavel
// ele modifica a array e adiciona

numeros.pop()
//retorna o ultmo item e remove o mesmo

numeros.shift()
//retorna o primeiro numero e retira o mesmo da array

numeros.reverse()
// reverte
const cinco = 5;
const seis = 6;
numeros.splice(1, 0, cinco, seis)
//ele insere  apartir do elemento 1, remove a variavel cinco e seis


['item1', 'item2', 'item3'].copyWithin(2, 'item1')
//array.copywidthin;

['item1', 'item2', 'item3'].fill('banana')
//ele prenche tudo com banana
//tambem podemos manipular com numeros






//metodos de acesso
//nao muda a array 
//oque importa e o retorno da array

const transporteTerestre = ['caro', 'moto'];
const transporteAreaos = ['aviao', 'elecoptero'];

const todosTransportes = [].concat(transporteAreaos, transporteTerestre)

console.log(todosTransportes)



//indexOf() procura apartir do incio
//last indexOf apartir do final para o primeito
//inclues pergunta se tem

//slice retorna o index do array apartir do inicio ate o final
//da array
//o slice pode clonar
const clone = todosTransportes.slice();


