export default function modal() {
    const abrirModal = document.querySelector('[data-abrir="modal"]')
    const modalContainer = document.querySelector('[data-modal="container"]')
    const fecharModal = document.querySelector('[data-modal="fechar"]')
    let containerClass = 'ative'
    if (abrirModal && modalContainer && fecharModal) {
        function toggleModal(event) {
            event.preventDefault();
            modalContainer.classList.toggle(containerClass);
        }
        function close(event) {
            if (event.target === this) {
                toggleModal(event)
            }
        }
        abrirModal.addEventListener('click', toggleModal)
        fecharModal.addEventListener('click', toggleModal)
        modalContainer.addEventListener('click', close)
    }

}
