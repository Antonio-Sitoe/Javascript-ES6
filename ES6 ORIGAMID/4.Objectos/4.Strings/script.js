// Exercícios
// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento
const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  { descricao: 'Recebimento de Cliente', valor: 'R$ 49' },
];

let total = 0;
transacoes.forEach(({ valor }) => {
  let value = +valor.slice(2).trim();
  total += value;
});
console.log(total);
// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const lista = transportes.split(';');
console.log(lista);

// Substitua todos os span's por a's
const html = `<ul>
<li><span>Sobre</span></li>
<li><span>Produtos</span></li>
<li><span>Contato</span></li>
</ul>`;

const as = html.replaceAll('span', 'a');
console.log(as);

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';

const last = frase.charAt(frase.length - 1);
console.log(last);

// Retorne o total de taxas
const transacoesb = [
  'Taxa do Banco',
  'TAXA DO PÃO',
  'taxa do mercado',
  'depósito Bancário',
  'TARIFA especial',
];

const totalTaxa = transacoesb.reduce((ac, it) => {
  if (it.toLocaleLowerCase().includes('taxa')) {
    return ac + 1;
  }
  return ac;
}, 0);

console.log(totalTaxa);
