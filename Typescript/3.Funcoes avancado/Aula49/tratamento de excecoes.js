function Retangle(x, y) {
    this.x = x;
    this.y = y,

        this.Calc = function () {
            if (this.x > 0 && this.y > 0) {
                return this.x * this.y
            } else {
                throw 'Invalid Value for x or yF';
            }
        }
}


try {
    const retangle = new Retangle(10, 2);
    console.log(retangle.Calc())
} catch (e) {
    console.log(e)
}