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
