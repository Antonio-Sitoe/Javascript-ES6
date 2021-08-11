require("dotenv").config()

// busca o express
const express = require("express");

// atrelar o express
const app = express();

// chamando o bd
const mongoose = require("mongoose");
//conectar a base de dados

mongoose
  .connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Conexao a BD")
    app.emit("Pronto");
  }).catch(e=>{
    console.log(e)
  })

// colocar a porta
const port = 3000;

// caminho absoluto
const path = require("path");

// rotas
const routes = require("./routes");

// importar mildware
const mildware = require("./src/middlewares/middlewares");

// permissoes de urls
app.use(express.urlencoded({ extended: true }));

// conteudo estatico
app.use(express.static(path.resolve(__dirname, "public")));

// usando a rota
app.use(routes);
// usando o mildware
app.use(mildware);

// caminhos para o views (ter acesso a dados do template);
app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.on("Pronto", () => {
  app.listen(port, function () {
    console.log(`http://www.localhost:${port}`);
  });
});

// mongodb+srv://antonio:Gostoso533@cluster0.wupro.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
