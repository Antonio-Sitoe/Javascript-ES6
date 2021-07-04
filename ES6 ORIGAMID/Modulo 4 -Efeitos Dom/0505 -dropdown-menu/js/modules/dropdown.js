export default function dropDown() {

}

const dropdowMenu = document.querySelectorAll('[data-dropdown]')

dropdowMenu.forEach((item) => {
    ['click', 'touchstart', 'mouseover'].forEach((userEvent) => {
        item.addEventListener(userEvent, onMouseouver)
    })
})
function onMouseouver(event) {
    event.preventDefault();
    this.classList.toggle('ative');
    outsideClick(this, () => {
        console.log('ativou')
    });
};



function outsideClick(element, callback) {
    const html = document.documentElement;
    html.addEventListener('click', handleOutsideClick)
    function handleOutsideClick() {
        console.log(elementz)
        callback();

    }
}
