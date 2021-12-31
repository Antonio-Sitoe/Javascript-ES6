const aleatorio = (max = 3, min = 1) => {
  max *= 1000;
  min *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
};
function espera(msg, temp) {
  return new Promise((resolv, reject) => {
    if(typeof msg !== 'string') reject(new Error())
    setTimeout(() => {
      resolv(msg);
    }, temp);
  });
}

espera("Conexao com a base de dados 1", aleatorio())
  .then((resposta) => {
    console.log(resposta);
    return espera("Buscando os dados  2", aleatorio());
  })
  .then((resposta) => {
    console.log(resposta);
    return espera(45, aleatorio());
  })
  .then((resposta) => {
    console.log(resposta);
  })
  .catch(e => {
    console.log('ERRO', e)
  });

// sempre !== 

// resolve - executa - then - sera executado depois de resolv
// reject - rejeita - catch - caca o erro

// claramante cria aordem
