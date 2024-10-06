const fibb = require("./fibb");
const fibbRec = require("./fibbRec");
const mergeSort = require("./mergeSort");

console.log("Iteration");
console.log(fibb(1));
console.log(fibb(2));
console.log(fibb(3));
console.log(fibb(4));
console.log(fibb(8));
console.log(fibb(10));

console.log("Recursion");
console.log(fibbRec(1));
console.log(fibbRec(2));
console.log(fibbRec(3));
console.log(fibbRec(4));
console.log(fibbRec(8));
console.log(fibbRec(10));

// mergeSort Test
const test = [2, 1];
const test2 = [2, 3, 1];
const test3 = [1, 3, 2, 5];
const test4 = [1, 1, 5, 1, 2];
const test5 = [3, 4, 5, 1, 1];
const test6 = [3, 2, 1, 13, 8, 5, 0, 1];
const test7 = [105, 79, 100, 110];

console.log(mergeSort(test));
console.log(mergeSort(test2));
console.log(mergeSort(test3));
console.log(mergeSort(test4));
console.log(mergeSort(test5));
console.log(mergeSort(test6));
console.log(mergeSort(test7));
