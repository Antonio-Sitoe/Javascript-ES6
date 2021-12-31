

const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const limpar = document.querySelector('.limpar')
const tempo = document.querySelector('[data-resp]')

limpar.setAttribute('disabled', '')
pausar.setAttribute('disabled', '');


iniciar.addEventListener("click", iniciarTempo)
pausar.addEventListener("click", pausarTempo)
limpar.addEventListener("click", resetarTempo)



let cron;
let hh = 0;
let min = 0;
let seg = 0;


function iniciarTempo() {

    cron = setInterval(() => { timer(), 1000 })

    iniciar.setAttribute('disabled', '')
    limpar.setAttribute('disabled', '')
    pausar.removeAttribute('disabled')
}

function pausarTempo() {
    clearInterval(cron);
    iniciar.innerText = 'Continuar';
    iniciar.removeAttribute('disabled')
    limpar.removeAttribute('disabled')
    pausar.setAttribute('disabled', '');

}

function resetarTempo() {
    hh = 0;
    min = 0;
    seg = 0;

    iniciar.innerText = 'Iniciar';
    tempo.innerText = '00:00:00';
    pausar.removeAttribute('disabled')
    pausar.setAttribute('disabled', '');

}

function timer() {
    seg++;
    if (seg === 60) {
        seg = 0;
        min++
        if (min === 60) {
            min = 0;
            hh++;
            if (hh === 24) {
                resetarTempo();
            }
        }
    }
    let format = (hh < 10 ? '0' + hh : hh) + ":" + (min < 10 ? '0' + min : min) + ":" + (seg < 10 ? '0' + seg : seg)
    tempo.innerText = format;
}


