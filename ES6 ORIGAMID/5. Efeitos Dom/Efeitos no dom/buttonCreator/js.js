const controles = document.getElementById('controles');
const css = document.querySelector('.css');
const btn = document.querySelector('.btn');

function handleChange(e) {
  const name = e.target.name;
  const value = e.target.value;

  const condition =
    name === 'width' ||
    name === 'height' ||
    name === 'borderRadius' ||
    name === 'fontSize';
  if (name === 'texto') {
    btn.innerText = value;
  } else if (condition) {
    btn.style[name] = value + 'px';
  } else {
    btn.style[name] = value;
  }
  saveValues(name, value);
  setValues();
}

function saveValues(nome, value) {
  localStorage[nome] = value;
}
setValues();
function setValues() {
  const propreties = Object.keys(localStorage);
  if (propreties.length) {
    propreties.forEach((prop, i) => {
      controles.elements[prop].value = localStorage[prop];
    });
  }
}

controles.addEventListener('change', handleChange);
