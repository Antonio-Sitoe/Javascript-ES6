function InitTabMenu() {
  const tabmenu = document.querySelectorAll('.js-tabmenu li');
  const tabcontent = document.querySelectorAll('.js-tabcontent section');

  if (tabmenu.length && tabcontent.length) {
    tabcontent[0].classList.add('ativa');
    const activeTab = (index) => {
      tabcontent.forEach((section) => {
        section.classList.remove('ativa');
      });
      tabcontent[index].classList.add('ativa');
    };
    tabmenu.forEach((item, index) => {
      item.addEventListener('click', () => activeTab(index));
    });
  }
}
function initAccordion() {
  const acordionList = document.querySelectorAll('.js-accordion dt');
  const ativo = 'ativo';
  if (acordionList.length) {
    acordionList[0].classList.add(ativo);
    acordionList[0].nextElementSibling.classList.add(ativo);
    function activeAccordion() {
      this.classList.toggle(ativo);
      this.nextElementSibling.classList.toggle(ativo);
    }

    acordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
function InitScroolSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    //   const top = section.offsetTop;
    // window.scrollTo({
    //   top,
    //   behavior: 'smooth',
    // });
  }

  linksInternos.forEach((link) =>
    link.addEventListener('click', scrollToSection)
  );
}
function initAnimationOnScrooll() {
  const sections = document.querySelectorAll('.js-scrool');
  if (sections.length) {
    const heigh = window.innerHeight * 0.6;
    function animaScrool() {
      sections.forEach((section) => {
        const { top } = section.getBoundingClientRect();
        if (top - heigh < 0) section.classList.add('ativo');
        else section.classList.remove('ativo');
      });
    }
    animaScrool();
    window.addEventListener('scroll', animaScrool);
  }
}

InitTabMenu();
initAccordion();
InitScroolSuave();
initAnimationOnScrooll();
