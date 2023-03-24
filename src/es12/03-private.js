
  // setters getters

  class UserFour {
    constructor(name, ega) {
      this.name = name;
      this.ega = ega;
    }
  
    //metodos
    #speak() {
      return "Hello";
    }
  
    greeting() {
      return `${this.speak()} ${this.name}`;
    }
  
    get #uAge() {
      return this.ega;
    }
  
    set uAge(n) {
      this.ega = n;
    }
  }
  
  const instaceUserFour = new UserFour("David", 15);
  console.log(instaceUserFour.uAge);
  console.log(instaceUserFour.uAge = 20);
  