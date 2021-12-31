// metodos estaticos - sao metodos que podemos acessar na classe sem extanciar
// a classe ou sem utilizar a palavra new e eles tambem nao estarao disponiveis dentro da classe
//  metodos que estao so ligados na classe ou privados
//  os metodos estaticos eles sao metodos que estao referentes aoenas a classe anao a instancia da classe
class ControloRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }
  // metodo de instancia
  aumentarVolume() {
    this.volume += 2;
  }
  DiminuirVolume() {
    this.volume -= 2;
  }
  // metodo Estatico
  static soma(x, y) {
    return x + y;
  }
}
console.log(ControloRemoto.soma(6, 4));

const controle1 = new ControloRemoto("LG");
controle1.aumentarVolume()

// a difernca do metodo estaico para o metodo de instancia
// e que nao precisamos usar a palavra new e nem estao instnciados ou condicionados numa outra variavel
// e tambem quando usamos o metodo de instancia nao podemos ter accesso aos outros metodos
// os metodos estaticos nao tem acesso aos  dados da classe

