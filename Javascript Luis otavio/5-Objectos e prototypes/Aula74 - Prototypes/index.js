/*
o javascript e baseada em prototipos para passar propriedades e metodos de um objecto para o outro;

definicao de prototipo

prototipo e o termo usada para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde 
para futuras producoes, isto quer dizer, criamos a funcao uma unica vez e vai servir para as procimas milhares
de vezes.

Todos os objectos tem uma referencia interna para um prototipo 
(_proto_) que vem da propriedade prototype da funcao construtora que foi usada para
cria-lo.

quando tentamos acessar um menro de um objecto, primeiro o motor do js vai tentar encontrar este menbro no proprio 
objecto e depois a cadeia do prototipo e usada ate o topo (null) ate encontrar (ou nao ) o tal menbro.

Toda vez que criamos objecto vindo da funccao o javascript linka uma  propriedade chamada prototype

*/



function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function () {
    return this.nome + ' ' + this.Pessoa
}

const joao = new Pessoa('Jao', 'feliz')