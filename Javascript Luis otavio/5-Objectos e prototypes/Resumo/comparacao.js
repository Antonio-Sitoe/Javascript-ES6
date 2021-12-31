// const functionla = {
//     paradigm: 'Functional'
// }

// const scheme = {
//     name: 'scheme',
//     year: 1975,
//     __proto__: functionla
// }

// const js = {
//     name: 'Javascript',
//     year: 1995,
//     __proto__: functionla
// }

// console.log(js.paradigm)


// HERANCA DE PROTOTIPOS
/*

HEREANCA TEM COMO PRINCIPAL OBJECTIVO PRIMITIR O REUSO DO CODIGO
POR MEIRO DE COMPARTILHAMENTO DE PROPRIEDADES ENTR OBJECTOS, EVITANDO A DUPLICACAO

Na linguagem js a heranca e realizada entre objectos e nao em classes




//Metodo - hasOwnProprety - pergunta se essa propriedade e daquele objecto
*/
// for (const key in scheme) {
//     console.log(key, scheme.hasOwnProperty(key))
// }


// Existem outras formas de definir um prototipo de objecto
// const functionla = {
//     paradigm: 'Functional'
// }

// const scheme = {
//     name: 'scheme',
//     year: 1975,
// }

// const js = {
//     name: 'Javascript',
//     year: 1995,
// }
// // melhor usar o setPrototipe of quando queremos passar os metodos 
// // do prototipo

// Object.setPrototypeOf(scheme, functionla)
// Object.setPrototypeOf(js, functionla)





//Metodo Object.create - e possivel crirar um objecto passando o seu prototipo por parametro
// caso a mesma ppropriedade exista no objetco e no seu prototipo, a propriedade do proprio objecto e retornada

const functionla = {
    paradigm: 'Functional'
}


const scheme = Object.create(functionla)
scheme.name = 'scheme';
scheme.year = 1975;

const js = Object.create(functionla)
js
    .name = 'Javascript'
    .year = 1995;
    
    
js.paradigm ='OO'


console.log(js.__proto__.paradigm)


// heranca em javascript e simples porque ela e baseada em prototipos
// ou seja objectos herdando propriedades de objectos.