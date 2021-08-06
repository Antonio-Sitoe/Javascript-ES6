import GeraCpf from "./modules/GeraCpf.js";

import "./assets/css/style.css";

const cpf = document.querySelector(".cpf-gerado");


const gera = new GeraCpf();
cpf.innerText = gera.geraNovaCpf();
