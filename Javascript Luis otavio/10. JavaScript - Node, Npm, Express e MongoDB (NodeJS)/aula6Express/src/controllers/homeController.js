exports.paginaInicial = function (req, res) {
  req.session.usuario = {
    nome: "luiz",
    logado: true,
  };
  res.render("index");
  return;
};

exports.trataPost = function (req, res) {
  res.send("cheguei aqio");
};
