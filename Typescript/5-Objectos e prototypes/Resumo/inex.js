/*


objeto e uma colecao dinamica de propriedaees definidas por chaves , que podem ser do tipo string ou symbol, e o valor qque podm ser de qualauqer dado


ela pode ser alterada a qualquer momento - 
(propriedades acessadas por chvaes e valores)
os valores podem ser de quallquer tipo de dado

podemos criar objectos - 
podemos criar apartir da funcao construtora





*/


let objecto = new Object();

// A difereenca depende do objectivo
// nao te diferenca no resultado final

// em senarios que queremos expecificar o prototipos
Object.create(null)


//notacao literal
//  as chaves de uma propriedades podem ser strings ou simbol

let book = {
    'alo': 'hello',
    title: 'Clean Code',
    Author: 'Robert Martin',

    // podemos passar strings nas chaves
    'pages': 464,

    language: 'English',

    available: true,
    // numeros
    10: 5,
};



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


const key0 = 'title';
const key1 = 'Author';
const key2 = 'pages';
const key3 = 'language';
const key4 = 'available';

// desse jeito tambem podemos evocar funcoes
book = {
    [key1]: title,
    [key1]: Author,
    [key2]: pages,
    [key3]: language,
    [key4]: available,
};


/*===========================*/
// e possivel computar usando a referencia de objecto


book = new Object();

book[key0] = title;
book[key1] = Author;
book['paginas'] = pages;
book.language = language;
book.available = available


// cada uma daas propriedades podem ser consultadas da mesma forma


//percorrer prorpriedades dos objectos

// for (let key in book) {
//     console.log(key, book[key])
// }


const book2 = {}
let book3 = {}


for(let key in book){
   book2[key] = book[key]
   book3 = {...Object.assign(book)}
}



book3.sou = 'book3'


for (let key in book3) {
    console.log(key, book3[key])
}



console.log(book3 === book)