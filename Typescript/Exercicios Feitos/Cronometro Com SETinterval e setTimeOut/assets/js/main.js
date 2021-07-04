function getTimeFromSeconds(segundos) {
    const data = new Date(segundos * 1000);

    return data.toLocaleTimeString('pt-PT', {
        hour12: false,
        timeZone: 'UTC',
    })
}

const relogio = document.querySelector('.relogio');
let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(() => {
        segundos++
        relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000);
}

document.addEventListener('click', (e) => {
    const el = e.target;
    if (el.classList.contains('zerar')) {
        clearInterval(timer);
        relogio.innerHTML = `00:00:00`;
        relogio.style.color = `black`;
        segundos = 0;
    }
    if (el.classList.contains('pausar')) {
        clearInterval(timer);
        relogio.style.color = `tomato`;
    }

    if (el.classList.contains('iniciar')) {
        clearInterval(timer);
        iniciaRelogio()
        relogio.style.color = `black`;
    }
})