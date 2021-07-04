// //ARRAY

// const instrumentos = ['guitarra', 'baixo', 'viaolao']
// const precos = [49, 99, 69, 89]

// const dados = [new String('tipo 1'), ['carro', 'portas', { cor: 'azul', precos: 2000 }], function andar(nome) { console.log(nome) }];


// const caros = new Array('ford', 'fiat', 'honda')
// caros[2] = 'vw';
// caros[3] = 'Bmw';

// console.log(caros.length)


// //===========================    Metodos ARRAY FROM ============================================================


// const li = document.querySelectorAll('li')
// const arrayLi = Array.from(li)

// console.log(arrayLi)

// //===========================================================================================================================lenth=====================================================
// const frutas = ['banana', 'pera', ['uva Roxa', 'Uva verde']];

// console.log(frutas.length)



// const instrumento = ['guitarra', 'baixo', `viaolao`]
// instrumento.sort();
// console.log(instrumento)

// //organiza na ordem de caractere  em caractere
// const idades = ['8', '32', `21`, '7']
// idades.sort();
// console.log(idades)

// //===============================================================================================================================================================================
// //PUSH E UNSHIFT
// const carrros = ['ford', 'fiat', 'vw']
// carrros.unshift('kia', 'ferrari')
// carrros.push('parati', 'golf')
// console.log(carrros);


// //===============================================================================================================================================================================

// //shift e pop
// console.log(carrros.pop())
// console.log(carrros.shift())

// //==========================================================================================================================Y=====================================================

// console.log(carrros.reverse())

// //==========================================================================================================================Y=====================================================

// console.log(carrros)
// console.log(carrros.splice(1, 2, 'mercedes', 'bimas'))
// console.log(carrros)
// //==========================================================================================================================Y=====================================================
// console.log(['item1', 'item2', 'item3', 'item4'].copyWithin(2, 0, 2))

// //==========================================================================================================================Y=====================================================

// console.log(['item1', 'item2', 'item3', 'item4'].fill('banana', 0, 2))

// /*===================================================================================================================================================================================METODO DE ACESSO=====================================================*/
// const transporte1 = ['BARCO', 'AVIAO']
// const transporte2 = ['comboio', 'carro']

// const transpotesm = [].concat(transporte1, transporte2, 'van');
// console.log(transpotesm)

// //==========================================================================================================================Y=====================================================

// const linguagens = ['html', 'css', 'js', 'pithon', 'js']
// console.log(linguagens.indexOf('js'))
// console.log(linguagens.includes('js'))
// //==========================================================================================================================Y=====================================================  join

// let htmlString = '<h2>Titulo Principal</h2>'.split('h2').join('h3')
// console.log(htmlString)

// //==========================================================================================================================Y=====================================================slice

// console.log(linguagens.slice())

const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
const primeiroValor = comidas.shift();
console.log(primeiroValor)
// Remova o último valor de comidas e coloque em uma variável
const ultimoValor = comidas.pop();
console.log(ultimoValor)
// Adicione 'Arroz' ao final da array
const finaldoArrayAdd = comidas.push('Arroz')
console.log(finaldoArrayAdd)

// Adicione 'Peixe' e 'Batata' ao início da array
const initFinal = comidas.unshift('peixe', 'bATATA')
console.log(comidas)

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber',
  'Julia'];
// Arrume os estudantes em ordem alfabética
const alfabetica = estudantes.sort()
// Inverta a ordem dos estudantes 
const revertido = estudantes.reverse().includes('Joana')
// Verifique se Joana faz parte dos estudantes
console.log(revertido)
// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes('Juliana'))
console.log(alfabetica)

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div> 
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li, 
// utilizando split e join 
html = html.split('section').join('ul')
html = html.split('div').join('li')
console.log(html)


let carros = ['ford', 'fiat', 'vw', 'honda']
const oriinal = carros.slice()
carros.pop();
console.log(oriinal)
console.log(carros)


// Remova o último carro, mas antes de remover
// salve a array original em outra variável 