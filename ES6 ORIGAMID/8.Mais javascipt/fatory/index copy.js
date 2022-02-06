function $$(selectedElements) {
  const elements = document.querySelectorAll(selectedElements);

  function hide() {
    elements.forEach((element) => {
      element.style.display = 'none';
    });
    return this;
  }
  function show() {
    elements.forEach((element) => {
      element.style.display = 'initial';
    });
    return this;
  }

  function on(onEvent, callback) {
    elements.forEach((element) => {
      element.addEventListener(onEvent, callback);
    });
    return this;
  }

  function addClass(className) {
    elements.forEach((e) => {
      e.classList.add(className);
    });
    return this;
  }
  function removeClass(className) {
    elements.forEach((e) => {
      e.classList.remove(className);
    });
    return this;
  }
  return {
    elements,
    hide,
    show,
    on,
    addClass,
    removeClass,
  };
}

const btn = $$('button');
