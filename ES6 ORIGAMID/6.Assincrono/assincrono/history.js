const links = document.querySelectorAll('a');
async function fetchPage(url) {
  const response = await fetch(url);
  const text = await response.text();

  replaceContent(text);
}

function replaceContent(newtext) {
  const newHtl = document.createElement('div');
  newHtl.innerHTML = newtext;
  console.log(newHtl);
}

links.forEach((link) =>
  link.addEventListener('click', (e) => {
    e.preventDefault();
    fetchPage(e.target.href);
  })
);
