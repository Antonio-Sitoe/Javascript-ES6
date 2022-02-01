








//objectos conjunto de funcoes 
var pessoa = {
  nome: `andre`,
  idade: 28,
  profissao: `programador`,
  pussuiFaculdade: false
}

console.log(typeof (pessoa.idade))

//Metodo
var quadrado = {
  lados: 4,
  area (lado) {
    return lado*lado;
  },
  perimetro (lado){
    
    return this.lados * lado
  }
}
console.log(quadrado.area(2))  
console.log(quadrado.perimetro(2))  


//objceto serve para reutilizar o codigo - colocar mais de uma propeiredade ali no objecto.


//podemos adcionar novas propriedades e metodos a um object
var menu = {
  width: 900,
  height: 50,
  backgroundColor: `white`,
  metadeHeight(){
    this.height/2
  }
}
menu.backgroundColor = `black`
console.log(menu.metadeHeight) 
//palavra chave this

//tudo e um objecto

var nome = `Andre`
console.log(nome.length)

//exercicios

let dados = {
  nome: `antonio sitoe`,
  sobrenome: `MANUEL`,
  idade: 20,
  nacionalidade: `mocambicano`,
  personalidade: `extrovertido`,
  pussuiFaculdade:false,
}

dados.nomecompleto= function() {
   console.log(`${this.dados.nome} ${this.dados.sobrenome.toLocaleLowerCase()}`)
}



var carro ={
  preco:1000,
  portas:4,
  marca:`audi`,
}
carro.preco = 3000;
console.log(carro)


cachorro = {
  raca: `labrador`,
  idade: 10,
  late:true,
  function (latir) {
    if (){

    }
    
  }
}
