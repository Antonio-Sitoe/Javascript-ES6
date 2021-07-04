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
} initScrollSuave()

function initAnimaScroll() {
   const Sectionscroll = document.querySelectorAll('.js-scroll')
   //--10 verificar se o sections existe atravez do if.lengh
   if(Sectionscroll.length) {
      //--6-fazer o calculo que pega 60% da tela com uma variavel
      const pegar = window.innerHeight * 0.6;
      //--1 funcao que anima scroll que dispara
      function animaScroll() {
         //--3-saber a distancia que cada elemento esta do top
         Sectionscroll.forEach((section) => {
            const rect = section.getBoundingClientRect().top;
            //--7-criar uma outra variavel que ajuda a fazer calculo
            const calculo = (rect - pegar) < 0;
            //-4-verificar se a variavel e menor que 0
            if (calculo) {
               //-5- adicionar uma classe ai no if
               section.classList.add('ativo')
            } //--9 adicionar o else que faz a animacao sair 
            else {
               section.classList.remove('ativo')
            }
         })
      } animaScroll()
   }
   //--2 adicionar o evento scroll
   window.addEventListener('scroll', animaScroll)
} initAnimaScroll()
















