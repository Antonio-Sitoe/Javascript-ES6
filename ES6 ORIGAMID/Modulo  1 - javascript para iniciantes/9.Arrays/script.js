let n = prompt("Quantos casos voce vai digitar")

for(let i = 0; i <= n; i++){
  let num1 = prompt("Digite o numerador");
  let num2= prompt("Digite o denominador");
  if (num2 === 0){
    alert("Impossivel dividir")
  }else{
     let divisao = num1/num2;
     console.log(divisao)
  }
}
//logica de calculo

var x = 5
var