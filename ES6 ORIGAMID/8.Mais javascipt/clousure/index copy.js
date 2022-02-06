function contagem() {
  let contar = 0;
  4;
  return function () {
    contar++;
  };
}

const contar = document.querySelector('.contar');
function useState(state = '') {
  function setState(expression) {
    state += expression;
    return state;
  }
  return [state, setState];
}

const [state, setState] = useState(0);

function handleClick() {
  contar.innerHTML = state;
  setState(state + 1);
}

contar.addEventListener('click', handleClick);
