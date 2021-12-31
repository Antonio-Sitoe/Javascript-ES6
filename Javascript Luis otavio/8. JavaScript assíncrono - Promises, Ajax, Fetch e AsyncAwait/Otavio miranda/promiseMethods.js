const aleatorio = function (min = 1, max = 3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
};
const esperaAi = function (msg, tempo) {
  return new Promise(function (resolve, reject) {
   
    setTimeout(() => {
     if (typeof msg !== "string") {
      reject(false);
      return
    }
      resolve(msg);
    }, tempo);
  });
};

const promises = [

  esperaAi("frase 1", aleatorio()),
  esperaAi("frase 2", aleatorio()),
  esperaAi(100, aleatorio()),

];
Promise.all(promises)
  .then((response) => {
    console.log(response);
  })
  .catch((e) => {
    console.log(e);
  });
