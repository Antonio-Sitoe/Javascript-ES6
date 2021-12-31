// //   indices      0         1         2
// const nome = ['eduardo', 'maria', 'joana'];//criando um array normal


// //criar array com o construtor
// const nome = new Array('eduardo', 'maria', 'joao') 


// //alterando arrays
// nome[2] = 'joao'; 

// //usar delete quando queremos remover um elemento de um array e nao alterar o indice
// delete nome[2]; 

// console.log(nome);






/*====================================================================*/

// arrays sao valores por referencia
// const nome = ['eduardo', 'maria', 'joana'];
// const novo = nome;

// novo.pop();//metodo para remover o ultimo item
// console.log(nome)//[ 'eduardo', 'maria' ]



/*====================================================================*/
// //se quisermos modificar um array, ou atribuimos um 
// //array a uma outra variavel, temos de usar o rest e spred operator

// const nome = ['eduardo', 'maria', 'joana'];
// const novo = [...nome];

// novo.pop();//remove elementos do array
// //retorna  o array removido

// novo.shift();
// //desloca os indices e remove o primeiro elemento do array

// console.log(novo)//['eduardo', 'maria']
// console.log(nome)//['eduardo', 'maria', 'joana']



/*====================================================================*/



// const nome = ['eduardo', 'maria', 'joana'];
// const novo = 'joao';

// nome.push(novo)//adiciona elemento la no final do array
// nome.unshift('walace') // adiciona elementos no inicio do array 

// console.log(novo)
// console.log(nome)



/*====================================================================*/


// Com o arrar.slice() podemos cortar ou fatiar a array original 
//e colocamos em outra variavel, aquela parte que cortamos, 
//sera atribuida a essa nova variavel, isto e, retorna 
//uma novo array com os valores comecando do incio ate o fim
// const nome = ['eduardo', 'maria', 'joana', 'joao', 'rosana'];

// // const novo = nome.slice(1, 3); 
// const novo = nome.slice(2);

// console.log(novo) // [ 'eduardo', 'maria', 'joana', 'joao', 'rosana' ]
// console.log(novo) //[ 'joana', 'joao', 'rosana' ]




//*-==============================================================================
// // Com o nome.split(' ')  podemos converter numa string em um array
// const nome = 'Luiz otavio miranda';

// //retorna um array separado por espaco ' ';
// console.log(nome.split(' '))





//*-==============================================================================
///converter uma array em string
const nome = [ 'Luiz', 'otavio', 'miranda' ]

const novo = nome.join(' ');
//retorna uma string;
console.log(novo)