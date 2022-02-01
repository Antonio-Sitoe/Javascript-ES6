const funcionamento = () => {
  const funcionament = document.querySelector('[data-semana]');
  const diasSeman = funcionament.dataset.semana.split(',').map(Number);
  const horario = funcionament.dataset.horario.split(',').map(Number);
  const data = new Date();
  const diaAgora = data.getDay();
  const horarioAgora = data.getHours();
  const aberto = horarioAgora >= horario[0] && horarioAgora < horario[1];
  if (aberto && diasSeman.includes(diaAgora)) {
    funcionament.classList.add('aberto');
  }
};

export default funcionamento;
