//Declarando
// class User {}
// instanciando una clase
// const newUserThree = new User()

class User {
  // metodos
  greeting() {
    return "Hello";
  }
}

const instaceUser = new User();
console.log(instaceUser.greeting());

const bebloper = new User();
console.log(bebloper.greeting());

// constructor
class UserTwo {
  constructor() {
    console.log("Nuevo Usuario");
  }

  greeting() {
    return "Hello";
  }
}

const instaceUserOne = new UserTwo();
console.log(instaceUserOne);
console.log(instaceUserOne.greeting());

//this
class UserThree {
  constructor(name) {
    this.name = name;
  }

  //metodos
  speak() {
    return "Hello";
  }

  greeting() {
    return `${this.speak()} ${this.name}`;
  }
}

const instaceUserThree = new UserThree("Pedro");
console.log(instaceUserThree.greeting());

// setters getters

class UserFour {
  constructor(name, ega) {
    this.name = name;
    this.ega = ega;
  }

  //metodos
  speak() {
    return "Hello";
  }

  greeting() {
    return `${this.speak()} ${this.name}`;
  }

  get uAge() {
    return this.ega;
  }

  set uAge(n) {
    this.ega = n;
  }
}

const instaceUserFour = new UserFour("David", 15);
console.log(instaceUserFour.uAge);
console.log(instaceUserFour.uAge = 20);
