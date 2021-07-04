//heranca de prototipo


function Person(first, last, age, gender, interests) {
    this.name = {
        first,
        last
    };

    this.age = age;
    this.gender = gender;
    this.interests = interests;

};

Person.prototype.greeting = function () {
    console.log(`HI i'am ${this.name.first}`)
}




function Teacher(first, last, age, gender, interests, subject) {
    Person.call(this, first, last, age, gender, interests)

    this.subject = subject;
}
//desse modo quando executamos a funcao call estamos a herdar 
//as propriedades de person e estamos a atribuir ao this que e Teacher
//oque ajudou a reduzir o codico e nao ter que criar outra funcao
// entao todos os paramtros que foram nomeados na funcao call, passam a ser propriedades da funcao TEACHER AGORA.


const person = new Person('Antonio', 'sitoe')

/*HERDADNDO DE UM CONSTRUTOR SEM PARAMETROS*/

function Button() {
    this.width = 10;
    this.height = 20;
}


function PrimaryButton() {
    Button.call(this)


    this.background = `Blue`;
    this.color = `white`;
}

//Observe que apenas especificamos this dentro de call() — nenhum outro parâmetro é necessário, já que não estamos herdando propriedades do pai que são configuradas por meio de parâmetros.



console.log(Object.getOwnPropertyNames(Person.prototype.greeting))

Teacher.prototype = Object.create(Person.prototype)


Object.defineProperty(Teacher.prototype, 'constructor', {
    value: Teacher,
    enumerable: false, // so that it does not appear in 'for in' loop
    writable: true
});


console.log(Object.getOwnPropertyNames(Teacher.prototype.greeting))

Teacher.prototype.greeting = function () {
    let prefix;

    if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
        prefix = `Mr`
    } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
        prefix = 'Mrs.'
    } else {
        prefix = `Mx.`
    }
    console.log(`hello my name is ${prefix} ${this.name.last}  and I teach ${this.subject}`)
}

Teacher.prototype.bio = function () {
    return `Eu amo ${this.interests}`

}


const teacher = new Teacher(
    'Davi',
    'Griffths',
    31,
    'male',
    ['footboll', 'Basket'],
    'Mathematics')


// console.log(teacher.bio())
// console.log(teacher.name)
// console.log(teacher.subject)
// console.log(teacher.greeting())




function Student(first, last, age, gender, interests) {
    Person.call(this, first, last, age, gender, interests)
};

Student.prototype = Object.create(Person.prototype)


Object.defineProperty(Student.prototype, 'construtor', {
    value: Student,
    enumerable: false,
    writable: true,
})


Student.prototype.greeting = function () {
    return `Hello My name is ${this.name.first} i have a ${this.age} year old, i like ${this.interests}, and i'm are ${this.gender}`
}


const student = new Student('Antonio', 'sitoe', 21, 'Male', 'web Development')

console.log(student.greeting())

