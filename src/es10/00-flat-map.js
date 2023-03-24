const array = [1, 2, 3, 4, [1, 2, 3, 4, [1, 4, 5, 6, 7]]];

console.log(array.flat(3));

/*
[
  1, 2, 3, 4, 1, 2,
  3, 4, 1, 4, 5, 6,
  7
] */

// flatmap

const array2 = [1, 2, 3, 4,];
console.log(array2.flatMap(v => [v, v * 2]))

/*
[
  1, 2, 2, 4,
  3, 6, 4, 8
] */

