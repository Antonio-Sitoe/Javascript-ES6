export default function initModal() {
  const open = document.querySelector('[data-modal="abrir"]');
  const close = document.querySelector('[data-modal="fechar"]');
  const Modal = document.querySelector('[data-modal="container"]');

  if (open && close && Modal) {
    function toogle(e) {
      e.preventDefault();
      Modal.classList.toggle('ativo');
    }

    function outsideClicksOfModal(e) {
      if (e.target === this) toogle(e);
    }

    open.addEventListener('click', toogle);
    close.addEventListener('click', toogle);
    Modal.addEventListener('click', outsideClicksOfModal);
  }
}
