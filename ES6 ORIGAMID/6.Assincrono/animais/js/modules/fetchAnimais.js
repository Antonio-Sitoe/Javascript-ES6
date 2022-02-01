import initAnimaNumeros from './initAnimaNumeros.js';

function fetchAnimais() {
  async function fetchanimais(url) {
    try {
      const response = await fetch(url);
      const json = await response.json();
      const numeros = document.querySelector('.numeros-grid');
      json.forEach((animal) => {
        const div = createAnimal(animal);
        numeros.innerHTML += div;
      });
      initAnimaNumeros();
    } catch (e) {
      console.log(e);
    }
  }
  function createAnimal(animal) {
    return `<div class="numero-animal">
            <h3>${animal.specie}</h3>
            <span data-numero>${animal.total}</span>
          </div>`;
  }
  fetchanimais('./api.json');
}

export default fetchAnimais;
