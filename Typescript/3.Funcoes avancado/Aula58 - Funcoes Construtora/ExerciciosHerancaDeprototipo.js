//exmplos com class

class Person {
    constructor(first, last, age, gender, insterests) {
        this.name = {
            first,
            last
        };

        this.age = age;
        this.gender = gender;
        this.insterests = insterests;
    }


    greeting() {
        console.log(`Hello Iam ${this.name.first}`)
    }

    firewell() {
        console.log(`${this.name.first} has left the building. bye for now`)
    }
}

Person.prototype.hello = function(){
    return 'awena'
}

let han = new Person('Selio', 'solo', 25, 'Male', 'Smuggling');
han.greeting();

console.log(han.hello())






//hereanca com sintaxe de classe


//assim a baixo queremos crirar subclasses que sao atributos ou novos objectos, para isso usamos a palavra extend para informar ao javascritp a classe na qual queremos basear nossa classe

class Teacher extends Person {
    /*assim estamos a dizer que Teacher e subclasse de person e podendo aceder aos metodos criados na super ou PERSON*/

    /**Podemos tornar o código mais legível definindo o operador super() como o primeiro item dentro do constructor(). Isso chamará o construtor da classe pai e herdará os membros que especificarmos como parâmetros de super(), desde que sejam definidos lá: */

    constructor(first, last, age, gender, insterests, grade, subject) {
        super(first, last, age, gender, insterests)

        /*assim so ficou propriedades que pertecam ao Techer*/
        this.grade = grade;
        this._subject = subject;
    }

    get subject() {
        return this._subject;

    }

    set subject(newSubject) {
        this._subject = newSubject;
    }
}





//Quando instanciamos instâncias de objeto Teacher , podemos agora chamar métodos e propriedades definidos em Teacher e Person, como seria de esperar:
let buque = new Teacher('Osvaldo', 'Buque', 32, 'Male', 'Criket', ['Math', 'flor'], 'Ingles');

buque.greeting = function(){
   return 'hello sao outras senas agora tipo diferente da anterior' 
}

//geters e setters

//Os getters e setters trabalham em pares. Um getter retorna o valor atual da variável e seu setter correspondente altera o valor da variável para o que ela define.



console.log(buque.greeting())


buque.subject = 'Balloon Animal';



//os objetos são apenas outra forma de reutilização de código, como funções ou loops, com seus próprios papéis e vantagens específicos. Se você estiver criando um monte de variáveis e funções relacionadas e quiser rastreá-las todas juntas e empacotá-las perfeitamente, um objeto é uma boa ideia. Objetos também são muito úteis quando você quer passar uma coleção de dados de um lugar para outro. Ambas as coisas podem ser alcançadas sem o uso de construtores ou herança. Se você precisa apenas de uma única instância de um objeto, provavelmente é melhor usar apenas um literal de objeto e certamente não precisa de herança.


