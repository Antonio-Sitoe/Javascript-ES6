// Retorne a soma total de caracteres dos 
// parágrafos acima utilizando reduce
 const paregraphs = document.querySelectorAll('p')
 const ArrayP = Array.from(paregraphs)
 console.log(ArrayP)
const reduceMetodo = ArrayP.reduce.call(paregraphs, (acumulador, atual)=>{
   return acumulador + atual.innerText.length
},0)
console.log(reduceMetodo)

function criarElemt(tag, classe, conteudo){
   const elemento = document.createElement(tag);
   elemento.classList.add(classe)
   elemento.innerText = `${conteudo}`
   return elemento
}
console.log(criarElemt('div', 'ativo', 'hello world'))

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará
//dinâmico
const outraFuncao = new criarElemt('h1')
    outraFuncao.classList.add('titulo')
    outraFuncao.innerText = `hello word`
    console.log(outraFuncao)

const h1titulo = criarElemt.bind(null, 'h1', 'titulo')
console.log(h1titulo('cursos de html'))