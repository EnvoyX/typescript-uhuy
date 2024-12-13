"use strict";
// Function
// Implicit data type
// function create() {
//   return 'Thanks for create function';
// }
// console.log(create());
function createString() {
    return 'This is string';
}
function createNumber() {
    return 20;
}
// Arrow function
const createBoolean = () => true;
// Ways to call function
const createResult = () => 'This is result of function createResult';
const result = createResult();
console.log(result);
const callFunction = () => {
    console.log('HAHAHAHAHA');
};
callFunction();
console.log(createString());
console.log(createNumber());
console.log(createBoolean());
const calculateStuff = () => {
    let a = 1;
    let b = 2;
    let z = a + b;
    console.log(`Aku punya ${z} teman`);
};
calculateStuff();
// Working with parameters
// Implicit defined data type function also work
const addNumbers = (a, b) => {
    return a + b;
};
const addNumberString = (a, b) => {
    return `${a} plus ${b} is equal to: ${a + b}`;
};
// or with explicit defined data type of function
// to served as expected output from a function
const add = (a, b) => {
    return a + b;
};
const expectedToString = (a, b) => {
    return `${a} plus ${b} is equal to: ${a + b}`;
};
const pertambahan = addNumbers(50, 40);
console.log(pertambahan);
const hasil = add(30, 20);
console.log(hasil);
const hasilString = addNumberString(30, 40);
console.log(hasilString);
const expectedResultString = expectedToString(100, 100);
console.log(expectedResultString);
// Void function doesn't have to write return
// we can call it and display it by use log within the function
const multiplyNumbers = (x, y) => {
    let result = x * y;
    console.log({ result });
};
multiplyNumbers(25, 4);
