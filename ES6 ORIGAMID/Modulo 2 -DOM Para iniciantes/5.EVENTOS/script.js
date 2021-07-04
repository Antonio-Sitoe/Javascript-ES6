// const todosElementos= document.querySelectorAll('body *');


// function hando(event){
// event.currentTarget.remove()

// }
// todosElementos.forEach((Element)=>{
//    Element.addEventListener('click', hando)
// })

function handoT(event){
   if(event.key == 't'){
     const zomm=document.querySelector('html')
     zomm.classList.toggle('t')
   }
}

window.addEventListener('keydown', handoT)