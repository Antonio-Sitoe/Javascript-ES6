const init = document.querySelector('[data-init]');
const h2 = document.querySelector('h2');
const pause = document.querySelector('[data-pausar]');

console.log(init, pause);

let i = 0;
let timer;

function iniciar() {
  timer = setInterval(() => {
    h2.innerText = i++;
  }, 300);
}
function pausar() {
  clearInterval(timer);
}
init.addEventListener('click', iniciar);
pause.addEventListener('click', pausar);
init.addEventListener('dblclick', iniciar);

function resetar() {
  i = 0;
  h2.innerText = i;
}
