const paragrafos = document.querySelectorAll('.paragrafos p');const body = getComputedStyle(document.querySelector('body')).backgroundColor;for (let i of paragrafos) {i.style.backgroundColor = body;i.style.color = `white`;
}


