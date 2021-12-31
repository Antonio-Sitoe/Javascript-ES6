// API

//  Aplication - aplicativo pode ser diversas coisas
// pode ser um servidor, um objecto javascript e uma api, qualquer coisa que vamos interagir apartir de comandos

// Programming - programacao, isso significa que um comando ira encadear uma seria de eventos pre-definidos.

// interface - sao os metodos e formas que temos como interagir com essa aplicacao.

// EXEMPLOS - api do git =hub
//            array e seus metodos

// HTTP - protocolo usado para enviar e receber arquivos e dados na web

//  url - url e a forma inicial
//  method - metodo get e post update  delet e header.

const url = "pessoas.json";

const options = {
  method: "POST",
  body: {
    id: 2,
    aula: "html",
    tempo: "25min",
  },
  headers: {
    ''
  }
};

fetch(url, options);


// GET - puxa informacao, utilizado para pegar posts, usuarios e etc

// POST - utilizado para criar osts, usuarios.'

// PUT - GERALMENTE UTILIZADO PARA ATUALIZAR INFORMACOES

//  DELETE- deleta uma informacao
