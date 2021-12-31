let n1 = document.querySelector('[data-input]');
const button = document.querySelector('[data-button]');
const resp = document.querySelector('[data-resp]');



button.addEventListener('click', () => {
    const num = Number(n1.value);
    console.log(num)
    resp.innerHTML = `<H1>O seu numero e ${num}</H1>`;
    resp.innerHTML += `<h2>${num} E inteiro : ${Number.isInteger(num)}</h2>`;
    resp.innerHTML += `<h2>${num} E raiz qua : ${num ** 0.5}</h2>`;
    resp.innerHTML += `<h2>${num} E NAN : ${Number.isNaN(num)}</h2>`;
    resp.innerHTML += `<h2>ARRENDODANDO PAR A BAIXO : ${Math.floor(num)}</h2>`;
    resp.innerHTML += `<h2>ARRENDODANDO PAR A CIMA : ${Math.ceil(num)}</h2>`;
    resp.innerHTML += `<h2>COM DUAS CASAS DECIMAIS ${num.toFixed(2)}</h2>`;
})

