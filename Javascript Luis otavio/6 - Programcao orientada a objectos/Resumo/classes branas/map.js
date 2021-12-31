// estrutura de dados Map - e um objecto que armazena um conjunto de chaves e valores que podem ser de qualquqer tipo de dado

// criacao de mapas

const time = new Map([
  ["second", 1],
  ["minute", 60],
]);

// size - retorna a quantidade dos array
console.log(time.size);

// set - serve para adicionar novos elementos
time.set("hours", 60);
time.set("days", 30);

//foreach -

time.forEach((item, index) => {
  console.log(item, index);
});
console.log(time);



// has - retorna true se a chave existe e false se ela nao existe
console.log(time.has('year'))


//get - retorna o valor da chave caso ela exista
// se nao existir retorna undefined
console.log(time.get('minute'))
console.log(time.get('year'))

// delete - remove um elmento do  conjunto
time.delete('hours')

/// clear - limpa todos os elemetos do mapa;
time.clear()

// qual e diferenca de  map e um objecto - as chaves do mapa podem ser de qualquer tipo nao so string ou simbol
// as chvaes nos objectos sao convertidas para strings 

const objt = {}

objt[10] = 'number';
objt['10'] = 'string';
objt['10'] = 'bolean';


const map = new Map();
map.set(10, 'number')
map.set('10', 'string')
map.set(true, 'Bolean')
map.set('true', 'String')

console.log(map.get(10))
console.log(map.get('10'))
console.log(map.get(true))
console.log(map.get('true'))

// quando crirmos objectos

const obj = {}