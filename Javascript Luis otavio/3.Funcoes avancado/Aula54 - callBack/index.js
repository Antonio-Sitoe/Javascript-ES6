// funcoes de callback - sao funcoes que sao executada quando uma acao ocorre ou finalisa

const rand = (min = 1000, max = 3000) => {
    const num = Math.random() * (max - min) + min
    return Math.floor(num)
}

const f1 = (callback) => {
    setTimeout(() => {
        console.log('f1')
        if (callback) callback();
    }, rand())

}

const f2 = (callback) => {
    setTimeout(() => {
        console.log('f2')
        if (callback) callback();
    }, rand());
}

const f3 = (callback) => {
    setTimeout(() => {
        console.log('f3')
        if (callback) callback();
    }, rand());

}
f1(f1callback)

function f1callback() {
    f2(f2callback)
}

function f2callback() {
    f3(f3callback)
}

function f3callback() {
    console.log('ola mundo')
}
// o problema e que quando trabalhamos na web precisamos de um tempo
// precmos de fazer coisas que nao conseguimos controlar 
//por exemplor queremos algo na base de daddos e nos 
//nao sabemos quando tempo vai levar em ainda ir bucar essas coisas
//para simular podemos fazer um timeout