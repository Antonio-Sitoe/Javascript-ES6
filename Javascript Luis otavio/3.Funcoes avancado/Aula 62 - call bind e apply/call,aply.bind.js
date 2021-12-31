//

const calculate = function (fn) {
    return fn(Math.PI * Math.pow(this.raio, 2));
}
const circle = {
    raio: 10,
    calculate
}



// console.log(calculate.call(circle, Math.round))
//invocamos a funcao passando o seu this


//invocamos o this com o apply
//o aply tem que passar parametros dentro do array
// console.log(calculate.apply(circle, [Math.ceil]))


//operacao BIND permeti que nos podemos encapsular o this dentro de uma funcao

const calcUlateForCircle =  calculate.bind(circle)

console.log(calcUlateForCircle())