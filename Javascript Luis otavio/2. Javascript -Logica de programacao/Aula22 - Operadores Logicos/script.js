//operadores logicos


//operador end ou && ou e - > todas as expressoes precisam ser verdadeiras para retornar true;

expressaoAnd = (true && true);

// ou ou or || 
const expressaoOr = false || false || true || false;

console.log(expressaoOr)
// console.log((5 === 5) !(5 >= 5))


const usuario = 'Luiz';

const senha = '123456';


const vaiLOgar = usuario === 'Luiz' && senha === '123456';
console.log(`${vaiLOgar}`)