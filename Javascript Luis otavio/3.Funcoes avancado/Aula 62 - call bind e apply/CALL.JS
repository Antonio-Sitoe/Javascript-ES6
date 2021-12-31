// function.call(this, arg, arg2)
//o metodo call sempre retorna o this do contexto que eu enviar

const yea = {
    name: 'maria'
}

function sayName() {
    this.age;
    console.log(this.name, this.age)

}

const dev = {
    name: 'isabela',
    age:35,
    sayMyAge(){
        // console.log(this.name,this.age)
    }

}


// bind  = lligar
//retorna a funcao chamada porem ligada
//bind cria a funcao mas ligada ao cntexto que lhe foi passado;
const bound = sayName.bind(dev)(20)

//estava desligada 
//agora esta ligada em u contexto
//bind semelhante ao call mas faz ligacao 
const age = dev.sayMyAge.bind(dev);

// console.log(age())



sayName.call(yea, 20)
sayName.call(dev, 19)
// devolveu o this do contexto do this

// console.log(dev.age)



// console.log(yea.age)


function multiply() {
    const args = Array.from(arguments)
    const m = args.reduce((ac, item) => {
        return ac * item;
    }, 1)
    return m;
}

sayName.apply(yea, [18, 20])
const total = multiply.apply(yea, [2, 2, 3, ])

console.log(total);






