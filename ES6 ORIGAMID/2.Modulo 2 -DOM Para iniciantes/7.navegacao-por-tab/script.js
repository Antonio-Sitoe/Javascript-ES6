//mencionar elementos que devem ser manipulados
const tabMenu = document.querySelectorAll('.js-tabmenu li')
const tabContent = document.querySelectorAll('.js-tabcontent section')

//aqui depois colocarmos o if
if (tabContent.length && tabMenu.length) {
//colocamos o add da classe para aparecer sempre
tabContent[0].classList.add('ative')
//por meio de uma funcao tornar os elemetos acima em objectos
//pegamos o conteudo
function ativeTab(index) {
   tabContent.forEach((itemContent) => {
      itemContent.classList.remove('ative')
   })
   tabContent[index].classList.add('ative')
}
//pegamos as imagens e fazer um loop para cada item
tabMenu.forEach((item, index)=>{
  item.addEventListener('click', ()=>{
   ativeTab(index)
  });
});
}
//colocamos um evento de click 
//que recebe como argumento o index
