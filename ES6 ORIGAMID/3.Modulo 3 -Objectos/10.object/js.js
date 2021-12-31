function verificar(dado) {
   return Object.prototype.toString.call(dado)
}
console.log(verificar({}))


const objectQuadrado = {
}
Object.defineProperties(objectQuadrado, {
   lado: {
      value: 4,
      enumerable: true,
   },
})

Object.freeze(objectQuadrado)

console.log(objectQuadrado)


const configuracao = {
   width: 800,
   height: 600,
   background: "#333",
}

Object.freeze(configuracao)
delete configuracao.width;
console.log(configuracao)

console.log(Object.getOwnPropertyNames(Array.prototype))
console.log(Object.getOwnPropertyNames(String.prototype))