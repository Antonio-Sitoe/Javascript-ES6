// generator pausam a execucao de uma determinada funcao

// function forever() {
//   let value = 1;
//   while (true) {
//     console.log(value++);
//   }
// }

// function today() {
//   const date = new Date();
//   console.log(date);
// }

// forever();
// today();

function Sum(a, b) {
  return new Promise((resolve, reject) => {
    if (!a || !b) return reject("Invalid input");
    setTimeout(() => resolve(a + b), 1000);
  });
}

(async function () {
  try {
    const functions = [Sum(2, 2), Sum(4, 4)];
    const results = [];

    for await (let fn of functions) {
      results.push(fn);
    }

    const [a, b] = results;
    const result = await Sum(a, b);

    console.log(result);
  } catch (e) {
    console.log(e);
  }
})();
