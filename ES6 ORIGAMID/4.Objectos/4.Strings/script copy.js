// const comida = 'pizza'
// const agua = new String('agua')
// console.log(agua)

// const frase = 'a melhor comida';
// console.log(frase[frase.length - 1])
// console.log(frase.charAt(0))


// const frase = 'A melhor linguagem e '
// const linguagem = `javascript`

// const fraseCompleta = frase.concat(linguagem, `!!`, `nao tem hello world`);

const fruta = `banana`
const listafrutas = `melancia. banana, turanja`;
// console.log(listafrutas.includes(fruta))


console.log(fruta.lastIndexOf('na'))


const transacao1 = 'deposito de cliente';
const transacao2 = 'deposito de fornecedor';
const transacao3 = 'taxa de camisas';

console.log(transacao1.slice(0, -2))

const preco = [
   `99`,
   `258`,
   `12555`
]

preco.forEach((item) => {
   console.log(item.padStart(10, '-'))
})
//reapeat
const ta = 'ta'
console.log(ta.repeat(5)) 
//replace
const listaItens = 'camisas bones calsa bermudas vestidos'
const ArrayLista = listaItens.split(', ');

console.log(ArrayLista)


// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

// const transacoes = [
//    {
//       descricao: 'Taxa do Pão',
//       valor: 'R$ 39',
//    },
//    {
//       descricao: 'Taxa do Mercado',
//       valor: 'R$ 129',
//    },
//    {
//       descricao: 'Recebimento de Cliente',
//       valor: 'R$ 99',
//    },
//    {
//       descricao: 'Taxa do Banco',
//       valor: 'R$ 129',
//    },
//    {
//       discricao: 'recebimeto do cliente',
//       valor: 'R$ 49',
//    },
// ];
// let taxatotal = 0;
// let rece = 0
// transacoes.forEach((item) => {
//    const limpo = +item.valor.replace('R$ ', '')
//    if (item.descricao.slice(0, 4) === 'Taxa')
//       taxatotal += limpo
//    else 
//        rece+= limpo
// })
// console.log(taxatotal)
// console.log(rece)


// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const array = transportes.split(';');
console.log(array)

// Substitua todos os span's por a's
const html = `<ul>
              <li><span>Sobre</span></li>
              <li><span>Produtos</span></li>
              <li><span>Contato</span></li>
            </ul>`;

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';

   console.log(frase[frase.length - 1])

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO',
   '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

const comida = 'pizaa ';
const agua = new String('agua');

console.log(comida.length);
console.log(agua.toLocaleLowerCase());

// podemos acessar o index como se fosse uma array

const frase = 'A melhor comida';

console.log(frase[frase.length - 1]);

// caraactere
console.log(frase.charAt(frase.length));

//  concat - concatenar strings
const linguagem = 'js';
const fraseFinal = frase.concat(' ' + linguagem);

const fruta = 'Banana';
const listaFruta = 'Melancia, banana, turanka';

console.log(fraseFinal);
console.log(listaFruta.includes(fruta));

console.log(fruta.startsWith('Ba'));

console.log(fruta);

// slice
const trans = 'deposito de cliente';
const trans2 = 'deposito de fornecedor';
const trans3 = 'taxa de fornecedor';

console.log(trans3.slice(-6));

// string repeat(n)
// replace

let lista = 'camisas bones calssas vestidos';

lista = lista.replaceAll(' ', ', ');
const arrayLis = lista.split().join();
console.log(lista);
console.log(arrayLis);
const html = `   <div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet in consequuntur tenetur dicta et quae assumenda aperiam suscipit officia cumque libero, iure ipsam excepturi id enim porro unde possimus. Autem?</p>
   </div>`;

console.log(html.split('div').join('section'));

