export default function initTolltip() {

}

const tooltip = document.querySelectorAll('[data-tooltip]')
tooltip.forEach((item) => {
    item.addEventListener('mouseover', onMouseover)
})

function onMouseover(event) {
    console.log(event)
    const tooltipBox = criarElemento(this)

    onMouseleave.tooltipBox = tooltipBox;
    onMouseleave.element = tooltipBox;
    onMousemove.tooltipBox = tooltipBox;
    this.addEventListener('mouseleave', onMouseleave)
    this.addEventListener('mousemove', onMousemove)
}

const onMouseleave = {
    tooltipBox: '',
    element: '',
    handleEvent() {
        this.tooltipBox.remove()
        this.element.removeEventListener('mouseleave', onMouseleave)
        this.element.removeEventListener('mousemove', onMousemove)
    }
}

const onMousemove = {
    handleEvent(event) {
        this.tooltipBox.style.top = event.pageY + 10 +"px";
        this.tooltipBox.style.left = event.pageX + 10 + "px";
    }
}

function criarElemento(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    window.document.body.appendChild(tooltipBox)
    return tooltipBox
}
