/*  o problema e que as funcoes sao d primeiras classe */

function fn1(){
    const v1 = 16;
    console.log(v1)
    return function(){
        console.log(v1)
    }
}

const fn2 = fn1();
const v1 = 1000;
fn2();


/* Clouser e uma funcao com o scope chain estatico  que definida no 
momento em que a funcao e criada, por isso, todas as funcoes na
 linguagme javascript sao clousers */

/* apesar de ser estatico esse scope chain faz referencia para 
o objecto que estao na na memeoria e poem ser compartilhados por mais de uma funcao*/


const v1 = 10;

const fn1 = (v1) => console.log(v1);

const fn2 = fn1 => {
    const v1 = 100;
    fn1(v1);
}

fn2(fn1)






// const v1 = 10;

// let v1 = 10;

// const fn1 = () => {
//     return {
//         m1() {
//             console.log(++v1)
//         },
//         m2() {
//             console.log(--v1)
//         }
//     }
// }
// const obj = fn1()


// obj.m1();
// obj.m2();





// const obj1 = {}

// for (var v1 = 0; v1 < 3; v1++) {
//     obj1[v1] = ((v2) => {
//         return function () {
//             console.log(v2)
//         };
//     })(v1);


// };

// //sai tres porque o escopo foi compartilhado 
// obj1[0]()
// obj1[1]()
// obj1[2]()






















const obj1 = {}

for (var v1 = 0; v1 < 3; v1++) {
    obj1[v1] = function () {
        console.log(this.v2)
    }.bind({
        v2: v1
    });
};

//sai tres porque o escopo foi compartilhado 
obj1[0]()
obj1[1]()
obj1[2]()