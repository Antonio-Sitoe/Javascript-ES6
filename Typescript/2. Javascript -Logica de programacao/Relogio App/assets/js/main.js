function tempo() {
    const iniciar = document.querySelector('[data-iniciar]');
    const pausar = document.querySelector('[data-pausar]');
    const zerar = document.querySelector('[data-zerar]');

    const relogio = document.querySelector('.relogio');

    iniciar.addEventListener('click', Iniciar)
    pausar.addEventListener('click', Pausar)
    zerar.addEventListener('click', Zerar)

    let timer;
    let segundos = 0;

    function Iniciar() {
        relogio.style.color = `#5a5757`;
        clearInterval(timer);
        //fazer o timer contar com a funcao de setinterval 
        iniciaRelogio();
    }

    function Pausar() {
        relogio.style.color = `tomato`;
        clearInterval(timer);
    }

    function Zerar() {
        relogio.style.color = `#5a5757`;
        clearInterval(timer);
        relogio.innerHTML = `00:00:00`;
        segundos = 0;
    }

    function criaHoraSegond(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-pt', {
            hour12: false,
            timeZone: 'UTC'
        })
    }

    function iniciaRelogio() {
        timer = setInterval(() => {
            segundos++;
            relogio.innerHTML = criaHoraSegond(segundos);
        }, 1000)
    }
}