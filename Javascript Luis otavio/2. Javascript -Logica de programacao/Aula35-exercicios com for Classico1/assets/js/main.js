const tags = ['p', 'div', 'footer', 'section']
const thug = tags.map((tag) => {
    tag = `<${tag}></${tag}>`;
    return tag;
});
const div = document.createElement('div');
window.document.querySelector('.container').appendChild(div);

for (let i = 0; i < tags; i++) {

    const elementos = [{
        tag: `${tags}`,
        Texto: `frase ${i}`
    }];

    div.innerHTML += `${thug[i]}`
}