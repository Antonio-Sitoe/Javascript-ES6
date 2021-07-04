function mostraHOra() {
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
    })
}

const timer = setInterval(() => {
    console.log(mostraHOra())
}, 500)


setTimeout(() => {
    clearInterval(timer)
}, 3000)


setTimeout(() => {
    console.log('helllo world')
}, 5000)