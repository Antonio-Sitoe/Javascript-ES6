// o METODO OBJECT.ASSIGN  - FAZ A COPIA DAS PROPRIEDADES DOS OBJECTOS PASSADOS POR PARAMETROS PARA O OBJECTO ALVO QUE E RETORNADO




const javascript = Object.create({})

// copia
const newObject = Object.assign(javascript, {
    name: 'Javascript',
    ano: 1995,
}, {
    paradigma: 'Functional'
})

//Object.keys - retorna as chaves do objectoe em uma array
console.log(Object.keys(newObject))

//objet.values - retorna os valores das propriedades
console.log(Object.values(newObject))

//Object.entries - retorna as propriedades doo objecto em pares de chave e valor
console.log(Object.entries(newObject))

//object.is - compara os objectos
console.log(Object.is(newObject === newObject))


//Object.defineProperty  - possui as seguintes propriedades

Object.defineProperty(newObject, 'name', {
    value: 'javascript',
    // value - define o valor de uma porpiedade 
    enumerable: true,
    // enumerable - permite que uma determinada propriedade seja enumerada
    writable: true,
    // writable - permite que determinada pripriedade tenha o seu valor modificada
    configurable: true
    // coonfigurable - permite que uma determinada propriedade seja apagada
})

delete javascript.name


const php = {
    name: 'php',
    year: 2015,
}

Object.setPrototypeOf(php, javascript)

console.log(php)

Object.preventExtensions(php)

//PreventExtensions -  impede que o objecto tenha novas propriedades, mas permite modifcar ou remover as propriedades existentes

console.log(Object.isExtensible(php))
//false quer dizer que ja foi aplicado

// Object.seal - -impede que o objceto tenha novas propriedades ou apague propriedades existentes, mas permite modificar propriedades existentes



// Object.freeze - impede que o objecto tenha novas propriedades, apagu ou modifique proprieddes existentes




// nao e possivel alterar o prototipo do objeto que se torna imutavel





console.log(newObject)