// const todosElementos= document.querySelectorAll('body *');

// function hando(event){
// event.currentTarget.remove()

// }
// todosElementos.forEach((Element)=>{
//    Element.addEventListener('click', hando)
// })

function handoT(event) {
  if (event.key == 't') {
    const zomm = document.querySelector('html');
    zomm.classList.toggle('t');
  }
}

window.addEventListener('keydown', handoT);

const img = document.querySelector('img');

function handleImg(e) {
  // e - event - possui diversas propriedades e metodos

  console.log('clicou', e);
}
img.addEventListener('click', handleImg);

const link = document.querySelector('a[href=^="http"]');

console.log(link);

const h1 = document
  .querySelector('h1')

  .addEventListener('click', handleEvent);

function handleEvent(e) {
  console.log(e.type);
}

const imgss = document.querySelectorAll('img');

imgss.forEach((img) => {
  console.log(img);
});
