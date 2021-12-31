// promises e uma promessa

const promessa = new Promise((resolve, reject) => {
  let condicao = true;
  if (condicao) {
    setTimeout(() => {
      resolve({ nome: "andre" });
    }, 1000);
  } else {
    reject(Error("andre101"));
  }
});

// oque torna uma promise especial e o metodo que vc passa nela chamado then()
// e podemos colocar como parametro qualquer coisas
// o them retorna uma outra promesse

const retorno = promessa
  .then((arg) => {
    arg.profisao = "designer";
    return arg;
  })

  .then((resolucao) => console.log(resolucao))

  //  catch - serve para quando a promessa for rejeitada
  .catch((rejected) => console.log(rejected))
  //  finally - executa a funcao anonima assiim que a promessa acabar
  .finally(() => console.log("acabou"));

//  Promise.all - retorna uma nova promise assim que todas as promisses dentro dela forem resolidas ou pelo menos uma reieitada. a resposta e uma array com as respostas de cada promise.

// se tiver um servidor com a promessa

const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Usuario logado");
  }, 1000);
});

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve("dados carregado");
  }, 1000);
});

// const carregouTudo = Promise.all([login, dados]);
// console.log(carregouTudo)

const carregouTudo = Promise.all([login, dados]);

carregouTudo.then((resolucao)=>{
  console.log(resolucao)
})
