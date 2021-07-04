function Form(nome, sobrenome, peso, altura) {
    return {
        nome,
        sobrenome,
        peso,
        altura,
    }
}

const btn = document.querySelector('button')

btn.addEventListener('click', (event) => {
    event.preventDefault();
    const nome = document.querySelector('.nome');
    const sobrenome = document.querySelector('.sobrenome');
    const peso = document.querySelector('.peso');
    const altura = document.querySelector('.altura');
    const result = document.querySelector('[data-resul]');
    const m = Form(nome.value, sobrenome.value, +peso.value, +altura.value);

    return result.innerHTML += `<p>${nome.value}, ${sobrenome.value}, ${+peso.value}, ${+altura.value}</p>`;
})