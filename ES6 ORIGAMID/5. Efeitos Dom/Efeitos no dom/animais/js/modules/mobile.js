import outsideClick from './outsideClick.js';
const mobile = () => {
  const Lista = document.querySelector('[data-menu="lista"]');
  const button = document.querySelector('[data-menu="button"]');
  const eventos = ['click', 'touchstart'];

  function openMenu() {
    Lista.classList.add('ative');
    button.classList.add('ative');
    outsideClick(Lista, eventos, () => {
      Lista.classList.remove('ative');
      button.classList.remove('ative');
    });
  }
  if (button) {
    eventos.forEach((e) => {
      button.addEventListener(e, openMenu);
    });
  }
};

export default mobile;
