function initTabNav() {
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
      tabMenu.forEach((item, index) => {
         item.addEventListener('click', () => {
            ativeTab(index)
         });
      });
   }
}
initTabNav()

function initAcordion() {
   const acordionList = document.querySelectorAll(' .js-acordion dt')
   const ativoClass = 'ativo'
   if (acordionList.length) {
      acordionList[0].classList.add(ativoClass);
      acordionList[0].nextElementSibling.classList.add(ativoClass);

      function ativeAcordion() {
         this.classList.toggle(ativoClass)
         this.nextElementSibling.classList.toggle(ativoClass)
      }

      acordionList.forEach((item) => {
         item.addEventListener('click', ativeAcordion)
      })
   }
}
initAcordion();

function initScrollSuave() {
   const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')
   function scrolltosection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href')
      console.log(href)
      const section = document.querySelector(href)
      section.scrollIntoView({
         behavior: "smooth",
         block: "start",
      });
      //forma alternativa
      // window.scrollTo({
      //    top:topo,
      //    behavior:"smooth",
      // })
   }
   linksInternos.forEach((link) => {
      link.addEventListener('click', scrolltosection)
   })
}initScrollSuave()





























