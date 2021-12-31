const num2 = [1, 2, 3];
const num1 = [4, 5, 6];

//concatenar ou juntar dois arrays


const a3 =  num2.concat(num1);
console.log(a3)//[ 1, 2, 3, 4, 5, 6 ]


/*========================================*/
//spread e rest operator
//quando chamamos de rest e quando estamos a pegar o resto de algyma coisa

//spread operator leva e espalha o array para 

//funcioana tanto para array e tambem objectos;


const num2 = [1, 2, 3];
const num1 = [4, 5, 6];
const num = [...num2, ...num1];//com spread operator 


//concatenar ou juntar dois arrays
console.log(num1)