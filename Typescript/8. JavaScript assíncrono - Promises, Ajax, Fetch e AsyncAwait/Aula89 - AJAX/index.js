// // como caregar a pagina dinamicamente

// const request = (obj) => {
//   const xhr = new XMLHttpRequest();
//   xhr.open(obj.method, obj.url, true);

//   // metodo http
//   xhr.send();

//   xhr.addEventListener("load", () => {
//     if (xhr.status >= 200 && xhr.status < 300) {
//       obj.sucess(xhr.responseText);
//     } else {
//       obj.error(xhr.statusText);
//     }
//   });
// };

// document.addEventListener("click", function (e) {
//   e.preventDefault();
//   const el = e.target;
//   const tag = el.tagName.toLowerCase();
//   const verify = tag === "a" ? carregaPagina(el) : tag;
// });

// function carregaPagina(el) {
//   const href = el.getAttribute("href");
//   request({
//     method: "GET",
//     url: href,
//     sucess(response) {
//       CarregaResultado(response);
//     },
//     error(errorText) {
//       console.log(errorText);
//     },
//   });
//   console.log(href);
// }

// function CarregaResultado(response) {
//   const resultado = document.querySelector(".resultado");
//   resultado.innerHTML = response;
// }

// como caregar a pagina dinamicamente

const request = (obj) => {
  return new Promise((resolv, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);

    // metodo http
    xhr.send();

    xhr.addEventListener("load", () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolv(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    });
  });
};

document.addEventListener("click", function (e) {
  e.preventDefault();
  const el = e.target;
  const tag = el.tagName.toLowerCase();
  const verify = tag === "a" ? carregaPagina(el) : tag;
});

async function carregaPagina(el) {
  try {
    const href = el.getAttribute("href");
    const response = await request({
      method: "GET",
      url: href,
    });
    CarregaResultado(response);
  } catch (e) {
    console.log( e);
  }
}

function CarregaResultado(response) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = response;
}
