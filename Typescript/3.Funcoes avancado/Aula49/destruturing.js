// // Destruturing
// // permite a desustruturacao de array e objectos

const cliente = {
    nome: 'antonio',
    compras: {
        digitais: {
            livros: ['My famyle abord', 'famile guy'],
            videos: ['Debbuger', 'html element']
        },
        fisicas: {
            cadernos: ['Livro de ponto']
        }
    }

}

const {
    nome,
    email = '@gmail.com'
} = cliente

console.log(nome + email)



// //arrays

// const [banana, uva, murango] = ['banana', 'uva', 'murango']


// //uma coisa comum e desestruturacao de argumento

// const handleKeyBord = (event) => {
//     console.log(event.keyCode)
// }

// document.addEventListener('keyup', handleKeyBord)







// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector('button');

const btnStyles = getComputedStyle(btn);
//getComputedStyle serve para pegarmos os estilos computados pelo browser 
//os styles atuais

const {
    backgroundColor,
    color,
    margin
} = btnStyles;

console.log(backgroundColor, color, margin)


// Troque os valores das variáveis abaixo
let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo]

console.log(cursoAtivo)
console.log(cursoInativo)
// Corrija o erro abaixo
const cachorro = {
    nome: 'Bob',
    raca: 'Labrador',
    cor: 'Amarelo'
}
const {
    cor: bobCor
} = cachorro;