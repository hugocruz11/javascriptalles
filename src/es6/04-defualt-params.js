function newUser(name, age, country) {
  var name = name || "Oscar";
  var age = age || 34;
  var country = country || "Mx";
  console.log(name, age, country);
}

newUser();
newUser("David", 15, "Bogota");

// defualt params es6

function newAdmin(name = "Oscar", age = 40, country = "cl") {
  console.log(name, age, country);
}
newAdmin()
newAdmin('Pedro', 30, 'col')
