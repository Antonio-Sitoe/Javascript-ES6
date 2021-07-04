// como copiar um objecto para outro

const produto = {
    nome: 'caneca',
    preco: 1.8
}

const
    outrOcoisa = {
        ...produto,
        //continuar a criar metodo e propriedade
    };

outrOcoisa.nome = 'Bone';
outrOcoisa.preco = 1500;
// console.log(outrOcoisa)
// console.log(produto)


/*====================================================*/
// OBJECT.ASSIGNE

const caneca = Object.assign({}, produto, {
    material: 'porcelana'
})
// desse modo copiamos tudo do produto para o objecto
// e ainda podemos aumnentar o objecto;


/*====================================================*/
console.log(Object.entries(produto))
// uma array que 
// faz oque object.values e object.keys fazem
// mistura e coloca os dois em uma array 
// e e iteravel com forof

for (let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor)
}

/*====================================================*/
// Object VAlues
console.log(Object.values(produto))
// volta os valores que estao dentro das propriedades



/*====================================================*/
// Object - getOwnPropertyDEscriptor
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))
// simplesmente retorna as propriedades abaixo
/*
{
    value: 'caneca',
    writable: true,
    enumerable: true,
    configurable: true
  }*/

/*====================================================*/
/*====================================================*/
// OBJECT. KEYS
console.log(Object.keys(produto))
// retorna um array com as chaves do produto


/*====================================================*/
// Object.FREEZE  - ELA APENAS CONGELA O OBJECTO E IMPEDE A ALTERACAO

Object.freeze(produto)
produto.nome = 'Antonio'
// NAO VAI  DAR PARA ALTERAR
/*====================================================*/