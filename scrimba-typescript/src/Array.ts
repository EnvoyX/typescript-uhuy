// Data typing of Array
let ages: number[] = [100, 200];
ages.push(20);
// ages.push("10")
console.log(ages);

type Orang = {
  name: string;
  age: number;
  isStudent: boolean;
};

let orang1: Orang = {
  name: 'Joe',
  age: 42,
  isStudent: true,
};

let orang2: Orang = {
  name: 'Jill',
  age: 66,
  isStudent: false,
};

/**
 * Challenge: create an array of people objects and
 * manually type it as an array of Person types
 */

let people: Orang[] = [orang1, orang2];
//  Or
// let people: Array<Orang> = [orang1, orang2];
