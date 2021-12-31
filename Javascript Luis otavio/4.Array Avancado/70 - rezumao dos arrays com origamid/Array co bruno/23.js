// const framework = ['angular js', 'ember js']

// // framework.forEach(feramenta => console.log(feramenta))
// // //angular js
// // //ember js


// const frame = [{
//     name: 'angular js',
//     contribuidores: 1584
// }, {
//     name: 'ember.js',
//     contribuidores: 240
// }, {
//     name: 'vue.js',
//     contribuidores: 746
// }]

// // const frameMenos = frame.filter(item => item.contribuidores < 1000)

// // console.log(frameMenos)


// const frameMenos = frame.every(item => item.name.includes('js'))
// //find retorna true se um ou mais elementos retornarem true
// console.log(frameMenos)



// //funcao de acumulacao 
// //usamos quando temos um cojunto de objectos

// const result = frame.reduce((total, frame) => {
//     return total + frame.contribuidores;
// }, 0)


// console.log(result)


const language = ['phyton', 'c', 'c', 'javas']

const concatenacao = ['C#', 'simula']

console.log(language.indexOf('c'))
//procura e retorna o index apartirdo inicio

console.log(language.lastIndexOf('c'))
//procura e retorna o index apartir do ultimo elemento

console.log(language.includes('c'))
//pergunta se existe esse elemento ou nao

const allLanguages = language.concat(concatenacao)
console.log(allLanguages);
//junta os arrays / ele nao modifica nenhum array

console.log(language.slice(1))
//retorna partes do array de acordo om a posicao de inicnio e fim


console.log(language.join(' - '))