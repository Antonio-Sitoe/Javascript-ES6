function fizzBuzz(num) {
    let fizbuz;

    if (typeof num !== 'number') {
        console.log(num);
    }
    if (Number.isInteger(num / 5) && Number.isInteger(num / 3)) {
        fizbuz = 'FizzBUZZ';
        console.log(fizbuz);
    } else {
        console.log(num);
    }

    if (Number.isInteger(num / 3)) {
        fizbuz = 'FIZZ';
        console.log(fizbuz);
    }

    if (Number.isInteger(num / 5)) {
        fizbuz = 'BUZZ';
        console.log(fizbuz);
    }

}
for (let index = 0; index <= 100; index++) {
    console.log(index, fizzBuzz(index));
}