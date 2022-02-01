fetch('https://jsonplaceholder.typicode.com/todos')
  .then((response) => {
    response.headers.forEach(console.log);
    response.json();
  })
  .then((json) => make(json));

function make(json) {
  const body = document.querySelector('.content');
  json.forEach((i) => {
    body.innerHTML += `<h1>${i.title}</h1>`;
  });
}
