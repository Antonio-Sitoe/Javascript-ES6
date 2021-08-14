const path = require("path");
const caminhoArquivo = path.resolve(__dirname, "teste.json");
const escrever = require("./modules/escrever"); 
const ler = require("./modules/ler");

// const pessoas = [
//   { nome: "luiza" },
//   { nome: "joao" },
//   { nome: "edu" },
//   { nome: "maria" },
// ];

// const json = JSON.stringify(pessoas, " ", 2);
// escrever(caminhoArquivo, pessoas);

async function le(caminho) {
  const dados = await ler(caminho);
  renderiza(dados);
}

function renderiza(dados) {
  console.log(dados);
  dados = JSON.parse(dados);

  dados.forEach((valor) => {
    console.log(valor);
  });
}

le(caminhoArquivo);
