const people = function (nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade,

        fala() {
            console.log(`${this} esta falando oii`)
        }
    };

};
const pessoa1 = people('Luiz', 'otavio', 15);

// const pessoa2 = criaPessoa('Tony', 'otavio', 6);
// const pessoa3 = criaPessoa('Mauro', 'otavio', 29);
// const pessoa4 = criaPessoa('Edy', 'otavio', 26);


console.log(pessoa1)
// console.log(pessoa2)
// console.log(pessoa3)
// console.log(pessoa4)