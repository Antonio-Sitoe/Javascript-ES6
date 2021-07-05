// Trabalhamos com promisses quando vamos usar uma coisa assincrona que e uma coisa que nao temos certeza
// de quando sera executado.

// Metodos para trabalhar com promisses
//
const aleatorio = (max = 3, min = 1) => {
  max *= 1000;
  min *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
};
function espera(msg, temp) {
  return new Promise((resolv, reject) => {
    if (typeof msg !== "string") {
      return reject(new Error());
    }
    setTimeout(() => {
      resolv(msg.toUpperCase() + " Passei na promise");
    }, temp);
  });
}

// Promise.all - passar um array com promises ou valores ja resolvedos - ele executa todas
/// se uma tiver erro ele retona no erro para todas,

const promisses = [
  // "primeiro Valor",
  espera("Promise 1 ", aleatorio()),
  espera("Promise 2 ", aleatorio()),
  espera("Promise 3 ", aleatorio()),
  // "Outro valor",
];

// Promise.all(promisses)
//   .then(function (value) {
//     console.log(value);
//   })
//   .catch(function (erro) {
//     console.log(erro);
//   });

// Promise.race - como se fosse uma corida, a primeira que ele resolver ele entrega valor
// tenta a resolver um valor
// Promise.race(promisses)
//   .then(function (value) {
//     console.log(value);
//   })
//   .catch(function (erro) {
//     console.log(erro);
//   });

// Promise.resolve -> retorna uma promessa ja resolvida.

Promise.resolve(promisses)
  .then(function (value) {
    console.log(value);
  })
  .catch(function (erro) {
    console.log(erro);
  });


// Promise.reject -> rejeita a promessa.
