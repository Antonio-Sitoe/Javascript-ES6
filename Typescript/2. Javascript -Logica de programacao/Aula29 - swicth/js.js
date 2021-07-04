const data = new Date();
console.log(data);

const diaSemana = data.getDay();


function getDiaSemana(diaSemana) {
  let diaSemana;
  switch (diaSemana) {
    case 0:
      console.log('Domingo')
      break;
    case 1:
      console.log('Segunda')
      break;
    case 2:
      console.log('Terca')
      break;
    case 3:
      console.log('Quarta')
      break;
    case 4:
      console.log('Quinta')
      break;
    case 5:
      console.log('Sexta')
      break;
    case 5:
      console.log('Sabado')
      break;
    default:
      console.log('Esse dia nao existe')
      break
  }
  return diaSemana;
}