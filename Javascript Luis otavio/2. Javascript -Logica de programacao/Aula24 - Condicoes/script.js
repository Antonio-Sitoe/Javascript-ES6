/*entre

0-11:59 - bom dia;
12.00 - 17:00 - boa tarde;
 */

/* */
const hora = 50;


if (hora >= 0 && hora <= 11) {
  console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) {
  console.log('Boa Tarde')
} else if (hora >= 18 && hora <= 23) {
  console.log('boa noite')
}else{
  console.log('As horas partem de 00:00 a 23:59')
}