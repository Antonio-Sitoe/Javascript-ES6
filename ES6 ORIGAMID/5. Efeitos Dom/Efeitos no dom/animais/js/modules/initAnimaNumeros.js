const initAnimaNumeros = () => {
  const animaNumeros = () => {
  const numeros = document.querySelectorAll('[data-numero]');
  numeros.forEach((numero) => {
    const total = +numero.innerText;
    const incrimento = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start = start + incrimento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  });
};
function handleMutation(mutation) {
  if (mutation[0].target.classList.contains('ativo')) {
    animaNumeros();
    observer.disconnect();
  }
}
const obsertarget = document.querySelector('.numeros');
const observer = new MutationObserver(handleMutation);
observer.observe(obsertarget, {
  attributes: true,
});

};

export default initAnimaNumeros;

