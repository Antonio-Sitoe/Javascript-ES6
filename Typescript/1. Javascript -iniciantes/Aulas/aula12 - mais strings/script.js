// let umaString = "um \"texto\"";

//               01234567   // cada caractere tem um indice 
let umaString = "O rato roeu a roupa do rei de roma";

//console.log(umaString[-5]);//se for negativo vai retornar udefined

// console.log(umaString.indexOf('o', 3));//comeca da frente para tras
// console.log(umaString.lastIndexOf('m',3));// de tras para frente
// console.log(umaString.match(/[a-z]/g));// de tras para frente

// console.log(umaString.search(/x/));//similar ao indexof mais aceita expressao regulares;

// console.log(umaString.replace(/r/g,'R'));

// console.log(umaString.slice(-5, umaString.length - 1)) //podemos usar numeros negativos;

// console.log(umaString.substring(umaString.length - 5))


console.log(umaString.split(' ', 3))