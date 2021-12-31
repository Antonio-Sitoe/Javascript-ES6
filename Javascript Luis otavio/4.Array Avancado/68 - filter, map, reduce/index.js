const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 15, 22, 27];

//filtrar
//dobrar 
//e somar tudo


const numeropares = numeros
    .filter(item => item % 2 === 0)
    .map(item => item * 2)
    .reduce((acum, item) => acum += item);

// assim estamos a retornar  a soma do dobro de todos os numeros pares da lista do array numeros



console.log(numeropares)


/*primeiro retorno*/

// [
//     50, 80, 2, 4,
//     6, 8, 22
// ]



/*============= segundo retorno ============*/

// [
//     100, 160,  4, 8,
//      12,  16, 44
//   ]

/*============= terceiro retorno ============*/



// 344