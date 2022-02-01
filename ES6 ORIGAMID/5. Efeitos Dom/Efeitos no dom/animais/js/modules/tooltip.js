const tooltip = () => {
  const toolti = document.querySelectorAll('[data-tooltip]');

  if (toolti) {
    function onMouseOver(e) {
      const tooltipBox = criarTooltipBox(this);
      onMouseLeave.element = this;
      onMouseLeave.tooltipBox = tooltipBox;
      onMouseMove.tooltipBox = tooltipBox;
      this.addEventListener('mouseleave', onMouseLeave);
      this.addEventListener('mousemove', onMouseMove);
    }
    const onMouseLeave = {
      handleEvent() {
        this.tooltipBox.remove();
        this.element.removeEventListener('mouseleave', onMouseLeave);
        this.element.removeEventListener('mousemove', onMouseMove);
      },
    };
    const onMouseMove = {
      handleEvent(e) {
        this.tooltipBox.style.top = `${e.pageY - 20}px`;
        this.tooltipBox.style.left = `${e.pageX + 20}px`;
      },
    };

    function criarTooltipBox(element) {
      const tooltipBox = document.createElement('div');
      tooltipBox.innerText = element.getAttribute('aria-label');
      tooltipBox.classList.add('tooltip');
      document.body.appendChild(tooltipBox);
      return tooltipBox;
    }

    toolti.forEach((element) => {
      element.addEventListener('mouseover', onMouseOver);
    });
  }
};

export default tooltip;
