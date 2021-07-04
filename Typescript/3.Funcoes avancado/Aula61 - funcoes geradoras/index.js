



//funcao geradora

function* geradora1(){
    //codigo qualquer
    yield "valor 1";
    yield "valor 2";
    yield "valor 3";

}


const g1 = geradora1();

// for(let valor of g1){
//     console.log(valor)
// }
//se ohamos o 

function* geradora2(){
    let i = 0;
    while(true){
        yield i;
        i++
    }
}

// const g2 = geradora2()

// console.log(g2.next().value);


function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4(){
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
    yield 6;
}

const g4 = geradora4()
for(let valor of g4){
    console.log(valor)
}


function* geradora5(){
    yield function(){
        console.log('vim do y1')
    };
    yield ()=>{
        console.log('vim do y2')
    }
}


const g5 = geradora5()

const func = g5.next().value;
const func2 = g5.next().value;

func()

//retorne retorna o valor e faz com que a
func2()