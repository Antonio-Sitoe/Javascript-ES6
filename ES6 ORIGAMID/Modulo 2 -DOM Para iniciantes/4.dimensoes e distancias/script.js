//cifrao 0
         //lista de classes

               //===  height

   //  const listAnimais = document.querySelector('.animais-lista')
    
   //  console.log(listAnimais.clientHeight0)

   //  const height = listAnimais.scrollHeight
   //  console.log(height)

   //       //=====  width

   //       const animaisTop = listAnimais.offsetLeft
   //       console.log(animaisTop)

   //       const raposa = document.querySelector('h2')
   //       const rect = raposa.getBoundingClientRect();


         // mesmo que media query matchMedia()






//e\===================EERCICIOS=========================

//VERIFICQUE A DISTANCIDA PRIMEIRA IMAGEM EM RELACAO AO TOPO DA PAGINA

const imgTop = document.querySelector('img');

console.log(imgTop.offsetTop)


function somaImagem(){
   const todasImgs =  document.querySelectorAll('img')

 let soma = 0
 todasImgs.forEach((img)=>{
   soma = soma + img.offsetWidth
});
console.log(soma)
}
window.load = function () {
   somaImagem()
}

const links = document.querySelectorAll('a')

links.forEach((link)=>{
   const linksWidth = link.offsetWidth;
   const linkheight = link.offsetHeight;

   if(linksWidth > 48 && linkheight  > 48){
      console.log('possui')
   }else{
      console.log('nao possui acesibilidade')
   }
})

const tela = window.matchMedia('(max-width: 720px)').matches

if(tela){
   console.log('tela mobile')
}else{
   console.log('tela Desktop')
}


















