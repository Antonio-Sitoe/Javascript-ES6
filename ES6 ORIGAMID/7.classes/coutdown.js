class Coutdown {
  constructor(futureDate) {
    this.futureDate = futureDate;
  }
  get _futureDate() {
    return new Date(this.futureDate);
  }
  get _atualDate() {
    return new Date();
  }

  get _timestempdiff() {
    return this._futureDate.getTime() - this._atualDate.getTime();
  }
  get Days() {
    return Math.floor(this._timestempdiff / (24 * 60 * 60 * 1000));
  }
  get hours() {
    return Math.floor(this._timestempdiff / (60 * 60 * 1000));
  }
  get minuts() {
    return Math.floor(this._timestempdiff / (60 * 1000));
  }
  get seconds() {
    return Math.floor(this._timestempdiff / 1000);
  }

  get total() {
    const days = this.Days;
    const hours = this.hours % 24;
    const minuts = this.minuts % 60;
    const seconds = this.seconds % 60;
    return {
      days,
      hours,
      minuts,
      seconds,
    };
  }
}

export default Coutdown;
