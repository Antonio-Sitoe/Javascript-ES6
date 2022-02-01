const button = {
  get tamanho() {
    return this._numero || 100;
  },
  set tamanho(value) {
    this._numero = value;
  },
};

console.log(button);
