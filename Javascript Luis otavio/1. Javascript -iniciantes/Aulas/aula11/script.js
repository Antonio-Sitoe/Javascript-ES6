//undefined quer dizer que nao apona para lado nenhum na memoria;

let varA  = 'A';//B
let varB  = 'B';//C
let varC  = 'C';//A

console.log(varA, varB, varC)

let alt = varA;
varA = varB;
varB = varC
varC = alt;



console.log(varA, varB, varC)