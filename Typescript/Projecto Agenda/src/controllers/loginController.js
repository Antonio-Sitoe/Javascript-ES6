const Login = require("../models/loginModel");

exports.index = (req, res) => {
  res.render("login");
};

exports.register = (req, res) => {
  const login = new Login(req.body);
  login.register()


  if(login.errors.length > 0 ){

  }
  res.send(login.errors);
};
