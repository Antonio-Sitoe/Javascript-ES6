// sao funcoes que retorna objectos 
// sem a necessidade de utilizar a palavra chave new, possuem basicamente
// a mesma funcao que construtor e classes


// cada objectp que criar tera as mesmas proprieadades


// function CreateButton(text) {

//     const numeroSecreto = '1515313151';


//     function createElement() {
//         const button = document.createElement('button');
//         button.innerText = text;
//         return button
//     }


//     return Object.freeze({
//         text,
//         createElement,
//     })
// }

// const btnBlue = CreateButton('Comprar')
// const btn = CreateButton('Vendar')

// Metodos e variaveis privadas  

// uma das vanagens e a possibilidade de crarmos metodos e variaveis privadas;

//ice fatory 
//fabrica de gelo 



// uma das vantagens da fatory function e a possibiludade de iniciamos a mesam sem o new ;












function $$(selectedElements) {
    const elements = document.querySelectorAll(selectedElements)

    function hide() {
        elements.forEach(element => {
            element.style.display = 'none'
        })
        return this;
    }

    function show() {
        elements.forEach(element => {
            element.style.display = 'initial'
        })
        return this
    }

    function on(onEvent, callback) {

        elements.forEach(element => {
            element.addEventListener(onEvent, callback)
        })
        return this
    }

    function addClass(className) {
        elements.forEach(element => {
            element.classList.add(className)
        })
        return this
    }

    function removeClass(className) {
        elements.forEach(element => {
            element.classList.remove(className)
        })
        return this;
    }

    return {
        elements,
        hide,
        show,
        on,
        addClass,
        removeClass
    }
}

const btns = $$('button');
btns.addClass('ative')

// console.log(btns.hide().show())

// btns.on('click', handleClick)



// function handleClick(event) {
// }