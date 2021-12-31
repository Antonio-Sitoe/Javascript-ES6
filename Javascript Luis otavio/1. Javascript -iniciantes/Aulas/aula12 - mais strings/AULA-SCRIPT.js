// //cada caractere te um indice

// //              
// let strings = "O rato roeu a roupa do rei de roma";

// // console.log(strings.concat(' em um lindo dia'));
// // console.log(strings.concat(` em um lindo dia`));

// // console.log(strings.indexOf(`texto`, 3))
// // console.log(strings.lastIndexOf('o'))

// console.log(strings.length)
// // console.log(strings.match(/[a-z]/g))
// // console.log(strings.replace(/r/g, 'outro'))

// // console.log(strings.slice(-5, -1));
// // console.log(strings.substring(strings.length - 5, strings.length -1));


// console.log(strings.split(' ').join('/').toUpperCase())


// var a = "a";
// var b = "b";
// if (a < b) // verdadeiro
// console.log(a + " é menor que " + b);
// else if (a > b)
//  console.log(a + " é maior que " + b);
// else
// console.log(a + " e " + b + " são iguais.");


// //               01234567
// let umaString = "O rato roeu a roupa do rei de roma.";

// // console.log(umaString.slice(-6, -1));
// // console.log(umaString.substring(umaString.length-5, umaString.length-1));

// console.log(umaString.split(' ', 3));



const nome = prompt('Digite seu nome completo:');
document.body.innerHTML += `Seu nome é: ${nome}<br />`;
document.body.innerHTML += `Seu nome tem ${nome.length} letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome.charAt(1)} <br />`;
document.body.innerHTML += `Qual o primeiro índice da letra LETRA no seu nome?  ${nome.indexOf('n')}<br />`;
document.body.innerHTML += `Qual o último índice da letra LETRA no seu nome? ${nome.lastIndexOf('n')}<br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(-3)}<br />`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')} <br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toLocaleUpperCase()}<br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLocaleLowerCase()}<br />`;

































