export default class Countdown {
  constructor(futureDate) {
    this.futureDate = futureDate;
  }

  // method que transforma em data
  get _futureDate() {
    return new Date(this.futureDate);
  }

  // data atual

  get _ActualDate() {
    return new Date();
  }

  // omparar a data fututro e atual
  get _timeDiff() {
    return this._futureDate.getTime() - this._ActualDate.getTime();
  }

  // transformar em dias, horas, segundos e mmilissengundos

  get date() {
    const days = Math.floor(this._timeDiff / (24 * 60 * 60 * 1000));
    const hours = Math.floor(this._timeDiff / (60 * 60 * 1000));
    const minuts = Math.floor(this._timeDiff / (60 * 1000));
    const seconds = Math.floor(this._timeDiff / 1000);
    return { days, hours, minuts, seconds };
  }

  //get total
  get total() {
    const days = this.date.days;
    const hours = this.date.hours % 24;
    const minuts = this.date.minuts % 60;
    const seconds = this.date.seconds % 60;

    return { days, hours, minuts, seconds };
  }

  get display() {
    const days = document.querySelector("[data-days]");
    const hours = document.querySelector("[data-hours]");
    const minuts = document.querySelector("[data-minuts]");
    const seconds = document.querySelector("[data-seconds]");

    const time = () => {
      days.innerText = this.total.days;
      hours.innerText = this.total.hours;
      minuts.innerText = this.total.minuts;
      seconds.innerText = this.total.seconds;
    };
    const timer = setInterval(time, 1000);

    return timer;
  }
}
