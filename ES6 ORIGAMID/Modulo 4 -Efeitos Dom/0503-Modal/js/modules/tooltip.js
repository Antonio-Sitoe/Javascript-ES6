export default function initTolltip() {

    const tooltips = document.querySelectorAll('[data-tooltip]')

    tooltips.forEach((item) => [
        item.addEventListener('mouseover', onMouseover)
    ])
    function onMouseover(event) {
        const tooltipBox = criarTooltipBox(this);
        this.addEventListener('mouseleave', onMouseleave)
        onMouseleave.tooltipBox = tooltipBox;
        onMouseleave.element = this;
        onMousemove.tooltipBox = tooltipBox;
        this.addEventListener('mousemove', onMousemove)

    }

    const onMousemove = {
        handleEvent(event) {
            this.tooltipBox.style.top = event.pageY + 20 + 'px';
            this.tooltipBox.style.left = event.pageX + 20 + 'px';
        }
    }

    const onMouseleave = {
        tooltipBox: '',
        element: '',
        handleEvent() {
            this.tooltipBox.remove();
            this.element.removeEventListener('mouseleave', onMouseleave)
            this.element.removeEventListener('mousemove', onMousemove)
        }
    }

    function criarTooltipBox(element) {
        const tooltipBox = document.createElement('div');
        tooltipBox.classList.add('tooltip');
        const text = element.getAttribute('aria-label')
        tooltipBox.innerText = text;

        window.document.body.appendChild(tooltipBox);
        return tooltipBox;
    }
}

















































