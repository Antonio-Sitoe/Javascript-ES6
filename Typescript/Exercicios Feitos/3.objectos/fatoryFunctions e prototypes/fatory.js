function CriaPessoa(nome, sobrenome) {
  const pessoaPrototype = {
    falar() {
      return this.nome + " falou maning";
    },
    bebeu() {
      return this.sobrenome + " bebeu maning";
    },
  };

  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome },
  });
}

const pessoa = CriaPessoa("luiz", "otavio");

console.log(pessoa);
