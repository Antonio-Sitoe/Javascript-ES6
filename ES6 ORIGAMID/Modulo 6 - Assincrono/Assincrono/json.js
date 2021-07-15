//  JSON - javascript object notation (json) e um formato de organizaca de dados, compostos por um conjunto de chave e valore, as aspas duplas sao obrigatorias, tanto na chave quanto no valor quando este for uma string.

// {
//   "id":1,
//   "nome":"Antonio"
// }

fetch("./dados.json")
  .then((response) => response.json())
  .then((json) => {
    json.forEach(element => {
      console.log(element.id)
    });
  });


//  JSON - PARSE - pega uma string de texto e tranforma em um objecto javascript.

// JSON - STRINGFY - ira tranformar um objecto javascript em uma string no formato Json.