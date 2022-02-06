const carro = {
  marca: 'honda',
  ano: 2021,
  tec: 'javascript',
  email: 'andre@gmail.com',
  gostos: ['futebol', 'banana', 'mulheres', 'estudar'],
};

const { marca, email = 'email@gmail.com', gostos } = carro;
const contar = document.querySelector('.contar');

const [a, b, c, d, e] = gostos;
console.log(a, b, c, d, e);

document.addEventListener('keyup', ({ key }) => {
  console.log(key);
  contar.innerText += key;
});
