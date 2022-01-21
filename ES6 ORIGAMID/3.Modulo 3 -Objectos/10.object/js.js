const moto = {
  rodas: 1,
};

Object.defineProperties(moto, {
  rodas: {
    value: 4,
    enumerable: true,
    writable: true,
    configurable: false,
  },
});

const frutas = {};
const frutas1 = {};
const n = frutas;
console.log(Object.is(frutas1, n));
