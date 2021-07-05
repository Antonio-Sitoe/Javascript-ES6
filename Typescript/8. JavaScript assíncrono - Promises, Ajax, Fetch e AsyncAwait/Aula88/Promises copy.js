const aleatorio = (max = 3, min = 1) => {
  max *= 1000;
  min *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
};
// simulacao de algo que demora
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

// async e await - nos permitem que utilizems promisses por dentro da funcao
// async perimite que usemos  await dentro de uma funcao para esperar que as promises
// sejam finalizadas

// as promises tem 3 estados 
// 1 pendente - pending
// 2 fullFilled - reprensetacao de sucesso ou resolvida
//  3 reject - rejeitada



async function executaAi() {
  try {
    const fase1 = await espera("Fase 1", aleatorio());
    console.log(fase1);

    const fase2 = await espera('Fase 2', aleatorio());
    console.log(fase2);

    const fase3 = await espera("Fase 3", aleatorio());
    console.log(fase3);

    console.log("Terminamos na fase 3", fase3);
  } catch (e) {
    console.log(e);
  }
}
executaAi();

// espera("Fase 1", aleatorio())
//   .then((value) => {
//     console.log(value);
//     return espera("Fase 2 ", aleatorio());
//   })
//   .then((value) => {
//     console.log(value);

//     return espera("Fase 3 ", aleatorio());
//   })
//   .then((value) => {
//     console.log(value);
//   })
//   .catch(e =>console.log(e));
