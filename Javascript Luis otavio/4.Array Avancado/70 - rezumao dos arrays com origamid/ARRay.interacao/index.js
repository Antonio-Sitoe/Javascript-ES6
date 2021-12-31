// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursos = Array.from(document.querySelectorAll('.curso'));


const horario = Array.from(document.querySelectorAll('.horas'))

const newSpan = document.createElement('span');
newSpan.classList.add('.horas')

horario.push(newSpan)



const arrayCursos = cursos.map((item, index) => {
    let titulo = item.querySelector('h1').innerText;
    let descricao = item.querySelector('p').innerText;
    let aulas = item.querySelector('.aulas').innerText;
    let horas = horario[index].innerText;



    return {
        titulo,
        descricao,
        aulas,
        horas
    }
});

console.log(arrayCursos.forEach(item=>{
    console.log(item)
}))





// Retorne uma lista com os
// números maiores que 100

const numeros = [3, 44, 333, 23, 122, 322, 33];

const maiorQ = numeros.filter(num => num >= 100)

console.log(maiorQ)
// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria',
    'Teclado'
]

console.log(instrumentos.includes('Baixo'))


// Retorne o valor total das compras
const compras = [{
        item: 'Banana',
        preco: 'R$ 4,99'
    },
    {
        item: 'Ovo',
        preco: 'R$ 2,99'
    },
    {
        item: 'Carne',
        preco: 'R$ 25,49'
    },
    {
        item: 'Refrigerante',
        preco: 'R$ 5,35'
    },
    {
        item: 'Quejo',
        preco: 'R$ 10,60'
    }
]



const total = compras
    .reduce((acum, item) => {
        return acum + Number(item.preco.slice(3).replace(',', '.'));
    }, 0);


console.log('Preco total', total)