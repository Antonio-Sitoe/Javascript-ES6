//METODOS


//FUNCTIO.CALL
//ele executa a funcao
//Com o call eu posso passar o novo valor do this
//this e referente ao novo objecto que foi criado

function oi(nome) {
    console.log('oi para voce', +'nome')

}
oi.call({}, 'Tony')


function descricao(velocidade) {
    console.log(this) //o this da funcao e o window
    console.log(this.marca + ' ' + this.ano + velocidade)
}

descricao.call({
    marca: 'honda',
    ano: 2015
}, 100)

//co o call podemos sustituir o this
//o valor do this 



// const carros = ['honda', 'fiat', 'bt50'];





// carros.forEach.call(frutas, (item) => {
//     console.log(item)
// })



function Dom(selector) {
    this.element = document.querySelector(selector);
}

Dom.prototype.ativo = function (classe) {
    console.log(this)
    this.element.classList.add(classe)
}

const ul = new Dom('ul');

const li = {
    element: document.querySelector('li')
}

Dom.prototype.ativo.call(li, 'ativar')




// //o objecto deve ser sempre parecido com o objecto original
//
// ul.ativo.call(li, 'ativo');





//usaos dese jeio



const frutas = ['banana', 'uva', 'peras'];

Array.prototype.mostrarThis = function(){
    console.log(this)
}

//usamos quando quermos manipular as arrays likes
Array.prototype.mostrarThis()

const li = document.querySelectorAll('li')

const filtro = Array.prototype.filter.call(li, (item)=>{
   return  item.classList.contains('ativo')
})
console.log(filtro)