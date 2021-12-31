const tabmenu = document.querySelectorAll('.js-tabmenu li');
const tabcontent = document.querySelectorAll('.js-tabcontent section');
tabcontent[0].classList.add('ative');

if(tabmenu.length && tabcontent.length){


function activeTab(index){
   tabcontent.forEach((content)=>{
     content.classList.remove('ative')
   });
   tabcontent[index].classList.add('ative')
}

tabmenu.forEach((item, index)=>{
    item.addEventListener('click', ()=>{
      activeTab(index)  
    })
})

}