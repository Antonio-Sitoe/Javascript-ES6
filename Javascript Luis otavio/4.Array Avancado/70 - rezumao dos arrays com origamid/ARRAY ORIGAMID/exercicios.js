const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
const primeiroValor = comidas.shift()
console.log(primeiroValor)

// Remova o último valor de comidas e coloque em uma variável

const ultimoValor = comidas.pop();
console.log(ultimoValor)


// Adicione 'Arroz' ao final da array
comidas.push('aroz')

// Adicione 'Peixe' e 'Batata' ao início da array

comidas.unshift('peixe', 'batat')


const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber',
    'Julia'
];
// Arrume os estudantes em ordem alfabética
console.log(estudantes)

estudantes.sort()

console.log(estudantes)
// Inverta a ordem dos estudantes

console.log(estudantes.reverse())
// Verifique se Joana faz parte dos estudantes

console.log(estudantes.includes('Joana'))


// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes('Juliana'))



let html = `<section>
<div>Sobre</div>
<div>Produtos</div>
<div>Contato</div>
</section>`
// Substitua section por ul e div com li,

// console.log(html.split('section').join('ul').split('div').join('li'))
// utilizando split e join


const carros = ['volvo', 'cadilac', 'bmw']

// salve a array original em outra variável
const [...mesmaArreay] =carros;

// Remova o último carro, mas antes de remover

carros.pop()

console.log(mesmaArreay)
console.log(carros)