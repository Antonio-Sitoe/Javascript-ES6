import outsideClick from './outsideclick.js';
export default function menuMobile() {
    const menuButton = document.querySelector('[data-menu="button"]')
    const menuList = document.querySelector('[data-menu="lista"]')
    const eventos = ['click', 'touchstart']
    if (menuButton) {
        function openMenu(event) {
            menuButton.classList.add('ative')
            menuList.classList.add('ative')
            outsideClick(menuList, eventos, () => {
                menuButton.classList.remove('ative')
                menuList.classList.remove('ative')
            })
        }
        eventos.forEach(evento => {
            menuButton.addEventListener(evento, openMenu)
        });
    }
}





