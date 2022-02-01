function fecthBitCoin() {
  fetch('https://blockchain.info/ticker')
    .then((response) => response.json())
    .then((json) => formatPrice(json.BRL.sell))
    .catch((e) => {
      console.log(e);
    });
  function formatPrice(price) {
    const btc = document.querySelector('.btc');
    btc.innerText = (100 / price).toFixed(4);
  }
}

export default fecthBitCoin;
