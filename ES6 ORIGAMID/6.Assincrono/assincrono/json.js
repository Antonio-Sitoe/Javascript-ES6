fetch('./api.json')
  .then((r) => r.json())
  .then((json) => console.log(json));

const confi = {
  player: 'google',
  tempo: '25.5',
  aula: '2.1 javascript',
};

const StringConfig = JSON.stringify(confi);

console.log(StringConfig);
