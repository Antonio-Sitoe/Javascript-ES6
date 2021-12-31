// history - serve para controla o esorico da browers

//  tem o method back e forward

//  tem o metodo pushState

// window.history.pushState(null, null, "sobre.html");
//  popstate -

const links = document.querySelectorAll("a");

function handleClick(e) {
  e.preventDefault();
  fetchPage(e.target.href);
  window.history.pushState(null, null, e.target.href);
}

async function fetchPage(url) {
  const pageResponse = await fetch(url);
  const text = await pageResponse.text();
  replaceContent(text);
}

function replaceContent(newText) {
  const div = document.createElement("div");
  div.innerHTML = newText;

  const oldContent = document.querySelector("#conteudo");

  const newCOntent = div.querySelector("#conteudo");

  oldContent.innerHTML = newCOntent.innerHTML;

  document.title = div.querySelector("title").innerText;
}

window.addEventListener("popstate", () => {
  fetchPage(window.location.href);
});

links.forEach((link) => {
  link.addEventListener("click", handleClick);
});
