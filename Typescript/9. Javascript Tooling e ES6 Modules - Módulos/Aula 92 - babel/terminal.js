/*

Abrir o terminal

[] iniciar o gerenciador de pacotes npn
  
  npm init -y

[] comando para digitar para instalar babel

  npm install --save-dev @babel/cli @babel/preset-env @babel/core


  [] digitar o codigo

  const nome = 'antonio
  const obj = {nome}
  const newObject = {...obj}

  [] converter com babel

  npx babel terminal.js -o bundle.js --presets=@babel/env

  [] fazer o script estar de maneira automatica 
  [] 1. no packege.json
  [] 2. no scritp em baixo de teste
  [] 3. colocar uma chave chamada babel com o valor:

    babel ./main.js -o ./bundle.js --presets=@babel/env -w
  [] 4. executar no terminal: npm run babel


*/