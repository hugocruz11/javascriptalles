function newUsers(user, age, country) {
  return {
    user: user,
    age: age,
    country: country,
  };
}

function newUsersTwo(user, age, country, uId) {
    return {
      user,
      age,
      country,
      id: uId
    };
  }

console.log(newUsers('Pedro', 29, 'MX'))
console.log(newUsersTwo('Pedro', 29, 'MX', 89))
