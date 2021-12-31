// getters e setters

/*
 getters  - quando criamos propriedades em um objecto, o javascript,
            nos permite ter acesso a essa propriedade atraves de uma
           funcao chamada get.
           get e na verdade pegar o objecto; 
           mas e muito mais que isso, os get's e set's     
           definem varios comportamentos para a propriedade

setters - quando pegamos esse mesmo objecto e atribuimos 
          um valor estamos na verdade a setar um esse valor

          
          */

// os gettes e setters nos permitem alterar conteudo de uma propriedade ,
//de um objecto, fora  do mesmo.

const obj = {
  nome: "antonio",
  sobrenome: "sitoe",
  get nomeCompleto() {
    return this.nome + " " + this._nomeDOmeio + " " + this.sobrenome;
  },
  set nomeCompleto(value) {
    this._nomeDOmeio = value;
    return this.nome + " " + this._nomeDOmeio + " " + this.sobrenome;
  },
};

obj.nomeCompleto = "Manuel";

console.log(obj.nomeCompleto);

// getters e setters nos objectos literais?

const alimento = {
  vitamina: "A",
  tipo: "salgado",
};

Object.defineProperties(alimento, {
  vitamina: {
    value: function (value) {
      return value;
    },
    writable: true,
    configurable: true,
  },
});

// getters e setters nas funcoes fabricas

function CreateMarket(nome, bancas, produtos) {
  return {
    nome,
    bancas,
    produtos,
    get pegaProdutos() {
      for (let prod of this.produtos) {
        console.log(prod);
      }
      return this.produtos;
    },
    set pegaProdutos(value) {
      this.produtos = value;
      return this.produtos;
    },
  };
}

const aguaAzul = CreateMarket("AguaAzul", 40, ["maca", "banana", "laranja"]);

aguaAzul.pegaProdutos = ['turanja', 'amendoi', 'cabs'];

console.log(aguaAzul.pegaProdutos);

console.log(aguaAzul.produtos);

//  getters e settersers nas funcoes construtoras

// Existem muitos motivos de uso e muitos motivos para nao usar
// os getters e setters, mas nas pesquisas eu apanhei dois motivos de uso
// 1 pela padronizacao.
// 2 pela validacao dos valores que podem vir a ser setados.
// 3 pela possibilidade de alterar valores fora do objecto.
// 4 quando sabemos que esses valores serao de facil alteracao.
