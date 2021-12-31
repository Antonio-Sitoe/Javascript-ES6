document.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === "a") {
    e.preventDefault();
    carregaPagina(el);
  }
});

async function carregaPagina(el) {
  try {
    const href = el.getAttribute("href");
    const response = await fetch(href);
    
    if (response.status !== 200) throw new console.error("ERRO 404");
    
    const json = await response.text();
    carregaResulatdo(json);
  } catch (e) {
    console.log(e);
  }
}

function carregaResulatdo(response) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = response;
}
