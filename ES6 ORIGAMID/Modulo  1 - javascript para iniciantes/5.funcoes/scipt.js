function terceiraIdade(idade){
  if (idade == 0){
    console.log(`ERRO DIGITE A SUA IDADE`)
  }else if (idade >= 60){
    return true
  }else{
    console.log('aie')
    return false
  }
}console.log(terceiraIdade(50))


// function faltaVisitar(paisesVisitados){
//   var totalPaizes = 193;
//   return `"falta visitar" ${totalPaizes} - ${paisesVisitados}`; 
// }
// console.log(paisesVisitados(20))

function dados(lado) {
     var nome= `antonio sitoe`,
     idade = 20,
    bi = 15245225;
  function outrosDados() {
     let cidade = ` Maputo`,
           bi = 48;
     let idade = 21
return `${nome}, ${idade} ${bi} ${cidade}`
  }
  return outrosDados()
}
console.log(dados())


// Crie uma função para verificar se um valor é Truthy

 function nome(){
 
    if (nome === `antonio`){
      return true
    }else{
         if ( nome === String){
                return false;
            }else{
                return true
      }
    }
 }
 console.log(nome())

// Crie uma função matemática que retorne o perímetro de um quadr
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(lado){
  return lado * 4
}console.log(perimetro(2))

// Crie uma função que retorne o seu nome completo 
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome){
  nome = `Antonio Manuel`;
  sobrenome = `Sitoe`
  return `${nome} ${sobrenome}`
}
console.log(nomeCompleto())
// Crie uma função que verifica se um número é par
  function numeroPar(numero){
    numero = 2; 
    if (numero % 2 == 0 ){
      return  `Numero par`
    }else{
      return `impar`
    }
  }console.log(numeroPar())
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof) 
function typedado(numero){
    numero = 2021;
   if (numero === Number){
     console.log(typeof numero)
   }else{
     console.log(typeof 2021)
    }}
// }console.log(typedado(numero))

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callb
// utilize essa função para mostrar no console o seu nome complet
// quando o evento 'scroll' o
addEventListener("click", function(botao){
  //  let botao = document.querySelector('div#butao')
  alert('clicou')
})