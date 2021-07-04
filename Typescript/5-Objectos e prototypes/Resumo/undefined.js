


// undefined
// e um  tipo de dado primitivo que so aprece quando nao existe nenhuma chave  nessa varivale, funcaoo, objecto

// diferenca do undefineed  e null
// null - ausencia de valor
// undefined  - a propridade nem existe 

const title = 'clean coode';
const Author = 'Robert Martin';
const pages = 464;
const language = 'English';
const available = true;

// se tenho uma variavel com o mesmo nome da chave podemos simplifiacr

book = {
    title,
    Author,
    pages,
    language,
    available,
};


//  consulatar s existe um operador in

// console.log('title' in book) //true
// console.log('publcih' in book) //false

book.available = null;
book.available = undefined;



// sempre que quremos apagar uma propriedade de objecto 
// nos queremos colocar a propriedade delete

delete book

console.log('available' in book)// erro