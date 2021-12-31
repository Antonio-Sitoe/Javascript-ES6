const btn = document.querySelector('[data-button]');
const peso = document.querySelector('#input-text-1');
const altura = document.querySelector('#input-text-2');
const resposta = document.querySelector('[data-resposta]');



btn.addEventListener('click', imcCalcule);

function verificar(pesoValue, alturaValue, imc) {
  if (Number.isNaN(alturaValue)) {
    resposta.classList.add('errado');
    resposta.innerHTML = `<p>A altura e Invalido</p>`;
  } else if (Number.isNaN(pesoValue)) {
    resposta.classList.add('errado');
    resposta.innerHTML = `<p>O seu peso e invalido</p>`;
  } else if ((pesoValue === 0) || (alturaValue === 0)) {
    resposta.classList.add('errado');
    resposta.innerHTML = `<p>O seu peso e Altura sao invalidos</p>`;

  } else if (imc < 18.5) {
    resposta.classList.add('certo');
    resposta.innerHTML = `<p>O seu IMC e ${imc} Abaixo do peso</p>`;
  } else if ((imc >= 18.5) && (imc <= 24.9)) {
    resposta.classList.remove('errado');
    resposta.classList.add('certo');
    resposta.innerHTML = `<p>O seu IMC e ${imc} Peso normal</p>`;
  } else if (imc >= 25 && imc <= 29.9) {
    resposta.classList.add('certo');
    resposta.innerHTML = `<p>O seu IMC e ${imc} SobrePeso</p>`;
  } else if (imc >= 30 && imc <= 34.9) {
    resposta.classList.remove('errado');
    resposta.classList.add('certo');
    resposta.innerHTML = `<p>O seu IMC e ${imc} Obesidade  grau 1 </p>`;
  } else if (imc >= 35 && imc <= 39.9) {
    resposta.classList.add('certo');
    resposta.innerHTML = `<p>O seu IMC e ${imc} Obesidade grau 2</p>`;
  } else if (imc >= 40) {
    resposta.classList.remove('errado');
    resposta.classList.add('certo');
    resposta.innerHTML = `<p>O seu IMC e ${imc} Obesidade grau 3</p>`;
  }

}

function imcCalcule(event) {
  event.preventDefault();
  const pesoValue = +peso.value;
  const alturaValue = +altura.value;
  const imc = (pesoValue / (alturaValue * alturaValue)).toFixed(2);
  verificar(pesoValue, alturaValue, imc)

}