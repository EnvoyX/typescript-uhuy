let nyName = 'Bob'; // Implicit defined type

// Primitive Data Types: string, number, boolean
// Challenge: Explicitly type the variables below:

// Explicitly defined type
let numberOfWheels: number = 4;
let isStudent: boolean = false;

// Defining Custom Types
type Food = string;
let favoritefood: Food = 'Nasi Goreng';

// Challenge: finish the object type definition
// Challenge #2: try to figure out how to move the nested address object type
// into a separate type definition. When done correctly, there should be no more
// red errors in the editor

type Address = {
  street: string;
  city: string;
  country: string;
};

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  // Nested object types
  // adress: {
  //   street: string;
  //   city: string;
  //   country: string;
  // };
  address: Address;

  //  Optional properties
  // adding question mark to end of property
  religion?: string;
};

let person1: Person = {
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

let person2: Person = {
  name: 'Jill',
  age: 66,
  isStudent: false,
  address: {
    street: 'Akmal Street',
    city: 'Belobog',
    country: 'Teyvat',
  },
};

function displayInfo(person: Person) {
  console.log(`${person.name} lives at ${person.address?.street}`);
}

displayInfo(person1);
