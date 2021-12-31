const produto = { nome: "caneca", preco: 18 };

// copiar objectos traves de spread operator
const outraCoisa = {
  ...produto,
  material: "porcelama",
  outraCoisa: "muita coisa",
};

// copiar objectos apartir de Object.assign
// object assign - copia os objectis
const caneca = Object.assign({}, produto, { ...outraCoisa });

// criar um objecto

const { preco, material } = caneca;

// Object.keys - mostra as chaves dos produtos
// Object.values - retorna os valores do objecto
// console.log(Object.values(caneca));

// object.entries - retorna a propriedade com chave e valores
for (let [chave, valor] of Object.entries(caneca)) {
  //   console.log(chave, valor);
}
// Object.freeze - congela um objecto e nao da maneira de alterar

//object.getOwnProPERTYdESCRIPTOR
// retorna oque e a propriedade

// console.log(Object.getOwnPropertyDescriptor(caneca, "preco"));

// { value: 18, writable: true, enumerable: true, configurable: true }



