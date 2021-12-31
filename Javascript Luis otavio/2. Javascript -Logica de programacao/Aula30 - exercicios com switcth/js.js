const dates = new Date();
const h1 = document.querySelector('h1')

h1.innerHTML =
dates.toLocaleDateString('pt-br', {
  dateStyle: 'full',
  timeStyle: 'short'
});



// function pegarData(dates) {
//   const diaSemana = dates.getDay();
//   const dia = zerar(dates.getDate());
//   const horas = zerar(dates.getHours());
//   const minuts = zerar(dates.getMinutes());
//   const mes = dates.getMonth() + 1;
//   const ano = dates.getFullYear();

//   return `${escolhaSema(diaSemana)}, ${dia} de ${escolhaMes(mes)} de ${ano}, ${horas}:${minuts}`
// }



// function escolhaSema(diaSemana) {
//   let diaSemanaText;
//   switch (diaSemana) {
//     case 0:
//       diaSemanaText = `Domingo`;
//       break;
//     case 1:
//       diaSemanaText = `Segunda-Feira`
//       break;
//     case 2:
//       diaSemanaText = `Terca-Feira`;
//       break;
//     case 3:
//       diaSemanaText = `Quarta-feira`;
//       break;
//     case 4:
//       diaSemanaText = `Quinta-Feira`;
//       break;
//     case 5:
//       diaSemanaText = `Sexta-Feira`;
//       break;
//     case 6:
//       diaSemanaText = `Sabado`;
//   }
//   return diaSemanaText;
// }


// function escolhaMes(mes) {
//   let diaSemanaText;
//   switch (mes) {
//     case 0:
//       diaSemanaText = `Janeiro`;
//       break;
//     case 1:
//       diaSemanaText = `Fevereio`;
//       break;
//     case 2:
//       diaSemanaText = `Marco`;
//       break;
//     case 3:
//       diaSemanaText = `abril`;
//       break;
//     case 4:
//       diaSemanaText = `maio`;
//       break;
//     case 5:
//       diaSemanaText = `Junho`;
//       break;
//     case 6:
//       diaSemanaText = `Julho`;
//       break;
//     case 7:
//       diaSemanaText = `Agosto`;
//       break;
//     case 8:
//       diaSemanaText = `Setembro`;
//       break;
//     case 9:
//       diaSemanaText = `Outubro`;
//       break;
//     case 10:
//       diaSemanaText = `Novembro`;
//       break;
//     case 11:
//       diaSemanaText = `Dezembro`;
//       break;

//   }
//   return diaSemanaText;
// }

// function zerar(num) {
//   return num >= 10 ? num : `0${num}`
// }