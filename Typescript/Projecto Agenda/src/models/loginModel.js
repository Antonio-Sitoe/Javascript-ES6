const mongoose = require("mongoose");
const Validator = require("validator");

const LoginShema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const LoginModel = mongoose.model("login", LoginShema);

class Login {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.user = null;
  }

  register() {
    this.valida();
    if (this.errors.length > 0) return;
  }

  valida() {
    this.cleanUp();
    // validar os campos
    // email  deve ser valido
    if (!Validator.isEmail(this.body.email))
      this.errors.push("E-mail Invalido");
    // senha entre 3 e 50

    if (this.body.password.length < 3 || this.body.password.length > 50) {
      this.errors.push("A senha precisa ter entre 3 e 50 caracateres");
    }
  }

  cleanUp() {
    for (let key in this.body) {
      if (typeof this.body[key] !== "string") {
        this.body[key] = "";
      }
    }
    this.body = {
      email: this.body.email,
      password: this.body.password,
    };
  }
}

module.exports = Login;
