import ValidaCPF from "./index.js";

class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector(".formulario");
    this.eventos();
  }

  eventos() {
    this.formulario.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const camposValidos = this.camposValidos();
    const senhasValidas = this.senhasSaoValidas();

    if (camposValidos && senhasValidas) {
      alert("Formulario Enviado");
      this.formulario.submit();
    }
  }

  senhasSaoValidas() {
    let valid = true;

    const senha = this.formulario.querySelector(".senha");
    const RepitirSenha = this.formulario.querySelector(".repetir-senha");
    if (senha.value !== RepitirSenha.value) {
      valid = false;
      this.criaErro(senha, `Campos de senhas precisam ser iguais`);
      this.criaErro(RepitirSenha, `Campos de senhas precisam ser iguais`);
    }

    if (senha.value.length < 6 || senha.value.length > 12) {
      valid = false;
      this.criaErro(senha, `Senha precisa estar entre 6 e 12 caracteres`);
    }
    return valid;
  }

  camposValidos() {
    let valid = true;

    this.formulario
      .querySelectorAll(".error-text")
      .forEach((errorText) => errorText.remove());

    for (let campo of this.formulario.querySelectorAll(".validar")) {
      const label = campo.previousElementSibling.innerText;
      if (!campo.value) {
        this.criaErro(campo, `O campo ${label} nao pode estar em branco`);
        valid = false;
      }
      if (campo.classList.contains("cpf")) {
        if (!this.ValidaCPF(campo)) valid = false;
      }

      if (campo.classList.contains("usuario")) {
        if (!this.ValidaUsuario(campo)) valid = false;
      }
    }
    return valid;
  }

  ValidaCPF(campo) {
    const cpf = new ValidaCPF(campo.value);

    if (!cpf.valida()) {
      this.criaErro(campo, "CPF invalido");
      return false;
    }
    return true;
  }

  ValidaUsuario(campo) {
    const usuario = campo.value;
    let valid = true;

    if (usuario.length < 3 || usuario.length > 12) {
      this.criaErro(campo, "usuario precisa ter entre 3 e 12 caracteres.");
      return (valid = false);
    }

    if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
      this.criaErro(campo, "Nome do usuario precisa conter letras ou numeros");
      return (valid = false);
    }
    return valid;
  }

  criaErro(campo, msg) {
    const div = document.createElement("div");
    div.innerHTML = msg;
    div.classList.add("error-text");
    campo.insertAdjacentElement("afterend", div);
  }
}
const valida = new ValidaFormulario();
