const express = require("express");
// criar uma constante de rota
const route = express.Router();


// Rota de pagina inicial
const { paginaInicial, trataPost } = require("./src/controllers/homeController");
route.get("/", paginaInicial);
// criar um controlers para cada coisa que fazer
route.post("/", trataPost);

// rotas de contato
const { contato } = require("./src/controllers/cantatoControlers");

route.get("/contato", contato);

// todas as rotas criadas vao vir para aqui
module.exports = route;
