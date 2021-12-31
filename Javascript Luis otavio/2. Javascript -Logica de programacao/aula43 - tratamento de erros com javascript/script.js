///variavel not defined

// try {
//     console.log(erro)
// } catch (err) {
//     console.log('ESSE ERRO NAO EXITE')
// }



// function soma(x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         throw new Error('x e y precisam ser numeros')
//     }
//     return x + y;
// }

// try { //executada quando nao ha erros
//     console.log(soma(1, '7'))
// } catch (error) { ///executada quando ha erros
//     console.log(error)
// } finally {
//     //executada sempre
// }

function retornaHora(data) {
    if (data && !data instanceof Date) {
        throw new TypeError('Esperando instancia de date')
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-PT', {
        hour12: false,
    });
}

try{
    
const data = new Date('0-01-1970 12:58:12')
const hora = retornaHora()

console.log(hora)
}catch(e){

}finally{
    console.log('Tenha um bom dia')
}