const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve("Resuelta");
    } else {
      reject("No resuelta");
    }
  });
};

anotherFunction()
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => {
    console.log("Finally");
  });
