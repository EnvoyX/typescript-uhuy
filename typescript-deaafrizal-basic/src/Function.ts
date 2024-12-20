// Function

// Implicit data type
// function create() {
//   return 'Thanks for create function';
// }
// console.log(create());

function createString(): string {
  return 'This is string';
}

function createNumber(): number {
  return 20;
}

// Arrow function
const createBoolean = (): boolean => true;

// Ways to call function
const createResult = (): string => 'This is result of function createResult';
const result = createResult();
console.log(result);

const callFunction = (): void => {
  console.log('HAHAHAHAHA');
};
callFunction();

console.log(createString());
console.log(createNumber());
console.log(createBoolean());

const calculateStuff = (): void => {
  let a = 1;
  let b = 2;
  let z = a + b;
  console.log(`Aku punya ${z} teman`);
};
calculateStuff();

// Working with parameters
// Implicit defined data type function also work

const addNumbers = (a: number, b: number) => {
  return a + b;
};

const addNumberString = (a: number, b: number) => {
  return `${a} plus ${b} is equal to: ${a + b}`;
};

// or with explicit defined data type of function
// to served as expected output from a function

const add = (a: number, b: number): number => {
  return a + b;
};

const expectedToString = (a: number, b: number): string => {
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
const multiplyNumbers = (x: number, y: number): void => {
  let result = x * y;
  console.log({ result });
};

multiplyNumbers(25, 4);
