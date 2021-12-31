function mostrar() {
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}


const timer = setInterval(() => {
    console.log(mostrar())
}, 500) //configura um intervalo de tempo para com que alguma funcao daca


setTimeout(()=>{
    clearInterval(timer)
}, 10000)


setTimeout(() => {
    
}, 5000);