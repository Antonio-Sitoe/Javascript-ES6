// Remova o erro

const priceNumber = (n) => +n.replace('R$', '').replace(',', '.');
priceNumber('R$ 99,99');
// Crie uma IIFE e isole o escopo
// de qualquer código JS.
const t = 'mlm';
(() => {
  const t = 'escopo isolado';
  console.log(t);
})();
console.log(t);
// Como podemos utilizar
// a função abaixo.
const active = (callback) => callback(t);

const result = active(function (t) {
  return t.replace('m', 'Tony ').replace('lm', '').trim();
});
console.log(result);
