"use strict";
// Data typing of Array
let ages = [100, 200];
ages.push(20);
// ages.push("10")
console.log(ages);
let orang1 = {
    name: 'Joe',
    age: 42,
    isStudent: true,
};
let orang2 = {
    name: 'Jill',
    age: 66,
    isStudent: false,
};
/**
 * Challenge: create an array of people objects and
 * manually type it as an array of Person types
 */
let people = [orang1, orang2];
//  Or
// let people: Array<Orang> = [orang1, orang2];
