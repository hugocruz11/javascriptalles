const promiseOne = new Promise((resolve, reject) => reject("Reject"));
const promiseTwo = new Promise((resolve, reject) => resolve("Resolve"));
const promiseThree = new Promise((resolve, reject) => resolve("Resolve 2"));

Promise.any([promiseOne, promiseTwo, promiseThree]).then((response) =>
  console.log(response)
);
