export default function background() {
    const btns = document.querySelectorAll('[data-cor]')
    btns.forEach((item) => {
        function backgroundColor() {
            const body = document.body;
            const color = this.dataset.cor
            switch (color) {
                case 'red':
                    body.classList.toggle(color)
                    break;
                case 'blue':
                    body.classList.toggle(color)
                    break;
                case 'black':
                    body.classList.toggle(color)
                    break;
            }
            if (body.classList.contains(color)) {
                btns.forEach((btns) => {
                    btns.style.border = "1px solid white";
                    btns.style.boxShadow = "4px 4px 4px rgba(0,0,0,.5)"
                })
            }
        }
        item.addEventListener('click', backgroundColor)
    })
}


