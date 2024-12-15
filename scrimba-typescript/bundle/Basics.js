"use strict";
let nyName = 'Bob'; // Implicit defined type
// Primitive Data Types: string, number, boolean
// Challenge: Explicitly type the variables below:
// Explicitly defined type
let numberOfWheels = 4;
let isStudent = false;
let favoritefood = 'Nasi Goreng';
let person1 = {
    name: 'Joe',
    age: 42,
    isStudent: true,
    address: {
        street: 'Akmal Street',
        city: 'Belobog',
        country: 'Teyvat',
    },
    religion: 'islam',
};
let person2 = {
    name: 'Jill',
    age: 66,
    isStudent: false,
    address: {
        street: 'Akmal Street',
        city: 'Belobog',
        country: 'Teyvat',
    },
};
function displayInfo(person) {
    var _a;
    console.log(`${person.name} lives at ${(_a = person.address) === null || _a === void 0 ? void 0 : _a.street}`);
}
displayInfo(person1);
