const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]


//forach - ele itera sobre valores 
// a1.forEach((item, indice, array) => {
//     console.log(item, indice, array)
// })


/*=========================*/
//simulando um reduce com forEach
let total = 0;
a1.forEach(item => total += item)
console.log(total);