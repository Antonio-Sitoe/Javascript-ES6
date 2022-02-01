async function dados() {
  let json;
  try {
    const response = await fetch('./api.json');
    json = await response.json();
  } catch (err) {
    console.log(err);
    json = err;
  }

  json.forEach((item) => {
    document.querySelector(
      '.content'
    ).innerHTML += `  <h1>Nome: ${item.nome} </h1>
      <p>Tempo: ${item.tempo}</p>`;
  });
}
dados();

async function m() {
  await new Promise((resolve) => {
    setTimeout(() => {
      console.log('depois de 1s');
      resolve();
    }, 3000);
  });
  console.log('acabou');
}
m();
