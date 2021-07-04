//exercicios
function pessoa(nome, sobrenome, idade){
   this.nome=nome;
   this.sobrenome = sobrenome;
   this.idade = idade;
}
pessoa.prototype.nomeCompleto = function(){
   return`${this.nome} ${this.sobrenome}`
 }

const nomCompleto = new pessoa('Antonio', 'Sitoe', 20)



const li = document.querySelector('li');

li;//elemnto do html
li.click;//funcao
li.innerText;//string
li.value//number
li.hidden;//bolean
li.offsetTop//number
li.click()//undefined
