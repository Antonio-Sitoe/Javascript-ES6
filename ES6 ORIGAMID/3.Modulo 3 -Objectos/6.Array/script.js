// const instrumentos = ['guitarra', 'hello']


// const li = document.querySelectorAll('li')



// const arraylike = Array.from(li)


// const frutas = ['banana', 'turanja', 'manga']
// frutas.sort();
// console.log(frutas)


// const carros = ['kia', 'fiat', 'honda']
// carros.unshift('ferrari', 'mustang')
// carros.push('velocite')
// // console.log(carros)

// carros.pop()
// console.log(carros)
// console.log(carros.splice(2, 0,'fusca'))
// console.log(carros)


// console.log(['item1','item2','item3','item4'].fill('banana', 0,3))

// const transpo1= ['barco', 'item2']
// const transpo2 = ['pura', 'vazia']

// const arrc = transpo1.concat(transpo2)
// console.log([].concat(arrc, 'van'))

// console.log(arrc.includes('css'))



const comidas = ['pizza', 'frango', 'carne', 'macarrao'];
const removeFist = comidas.shift()
const removeLast = comidas.pop()
console.log(removeFist)
console.log(removeLast)
const add = comidas.concat('arroz')
console.log(add)

const splicet = comidas.splice(0,0,'peixe', 'batata',)

console.log(comidas)

const estudantes = ['marcio', 'brenda', 'joana', 'kleber','julia']
console.log(estudantes.sort())
estudantes.reverse()
console.log(estudantes)

console.log(estudantes.includes('joana'))
console.log(estudantes.includes('joliana'))



let html = `<section>
                <div>Sobre</div>
                <div>Produtos</div>
                <div>Contactos</div>
            <section>`
//substitua section por ul e div com li
//utilizando split e join
html = html.split('section').join('ul')
html = html.split('div').join('li')

console.log(html)
const carros = ['ford', 'fiat','vw', 'honda' ]
const novoCarros = carros.slice();

carros.pop()

console.log(carros)


console.log(novoCarros)













