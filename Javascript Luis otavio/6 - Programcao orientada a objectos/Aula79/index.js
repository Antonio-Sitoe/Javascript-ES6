class User {
  #counter = 0;

  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  incrimentCounter() {
    return ++this.#counter;
  }
}

const CreateUser = (name, email) => {
  const counter = 0;
  return {
    name,
    email,
    incrimentCounter: () => {
      ++counter;
    },
  };
};

const user = new User("rogerio", "rogerio@gmail.com");
const user2 = CreateUser("rogerio", "rogerio@gmail.com");

console.log(user.incrimentCounter());
console.log(user2);
