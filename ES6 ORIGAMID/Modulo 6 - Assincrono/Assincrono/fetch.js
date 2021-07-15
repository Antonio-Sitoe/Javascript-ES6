// FECTH API - permite fazermos requisicoes http atraves do metodo fetch(), este metodo retorna a resolucao de uma promise. podemos entao utilizar o then para interagirmos com a resposta que e um objecto do tipo response.

// ==========================================

// const doc = fetch("./docs.txt");

// doc
//   .then((resolucao) => {
//     return resolucao.text();
//   })
//   .then((body) => {
//     const cont = document.querySelector("#conteudo");
//     cont.innerHTML = body;
//   });

// o then ajuda a interadir
// o fecth retorna um objecto chamado response

// ==========================================

// Response - o objecto response, possui um corpo com o conteudo da resposta. esse corpo pode ser tranformado utilizando metods do prototipo do objecto response. estes retornam outras promises.

// json()

//  um tipo de formato de dados muito utilizad com javascript e o JSON (javascript objecto notation), pelo fato dele possuir basicamente a mesma sintaxe que um objecto javascript.

// ==========================================
// const sobre = fetch("./sobre.html");

// const div= document.createElement('div')

// sobre.then((Response) => {
//   return Response.text();
// })

// .then(res =>{
//   div.innerHTML = res;
//   document.querySelector('#conteudo')
//   .appendChild(div)
// })
// ==========================================

//  .blob()
//  um blob e um tipo de objecto utilizado para representacao de dados de um arquivo. o blob pode ser utilizado para tranformarmos requisicoesde imagens por exemplo. o blob gera um URL unico
// ==========================================

const images = fetch("./img.png");

images
  .then((response) => response.blob())
  .then((body) => {
    const blobUrl = URL.createObjectURL(body);
    const img = document.querySelector("img");
    img.src = blobUrl;
  });

// ==========================================

//  clone() - metodo para clonar uma resposta

// fetch("./pessoas.json").then((r) => {
//   const r2 = r.clone();
//   r2.text().then((text) => {
//     console.log(text);
//   });
//   r.json().then((json) => {
//     console.log(json);
//   });
// });

// ==========================================

fetch("./pessoas.json").then((r) => {
  console.log(r);
});
