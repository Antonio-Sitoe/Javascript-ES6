// Application - servidor, objecto;

// programming - cadeia de eventos, pre-definidos;

// Interface - Metodos e formas para interagir com a aplicacao.

// HTTP

const url = 'https://jsonplaceholder.typicode.com/posts';

const options = {
  method: 'POST',
  body: JSON.stringify({
    title: 'Javascript',
  }),
  headers: {
    'Content-Type': 'application/json',
  },
};

document.querySelector('button').addEventListener('click', post);

function post() {
  fetch(url, options)
    .then((r) => r.json())
    .then((j) => console.log(j));
}
