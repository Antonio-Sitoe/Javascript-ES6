const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
const first = comidas.shift();
const last = comidas.pop();
const addL = comidas.push('arroz');
const add = comidas.unshift('Peixe', 'Batata');

// console.log(first);
// console.log(last);
// console.log(comidas);
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
console.log(estudantes.sort());
// Inverta a ordem dos estudantes
console.log(estudantes.reverse());

console.log(estudantes.includes('Joana' && 'Juliana'));
console.log(estudantes);
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes
let html = `<section>
<div>Sobre</div>
<div>Produtos</div>
<div>Contato</div>
</section>`;
// Substitua section por ul e div com li,
// utilizando split e joinconst carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
