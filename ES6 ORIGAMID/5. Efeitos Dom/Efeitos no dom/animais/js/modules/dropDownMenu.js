import outsideClick from './outsideClick.js';

export default function dropDownMenu() {
  const dropdown = document.querySelectorAll('[data-dropdown]');
  if (dropdown) {
    function handleClick(e) {
      e.preventDefault();
      this.classList.add('ative');
      outsideClick(this, ['click', 'touchstart'], () => {
        this.classList.remove('ative');
      });
    }
    dropdown.forEach((menu) => {
      ['click', 'touchstart'].forEach((userEvent) => {
        menu.addEventListener(userEvent, handleClick);
      });
    });
  }
}
