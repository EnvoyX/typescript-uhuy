// Custom type data

// Declaration of custom data
type FriendType = {
  nama: string;
  usia: number;
  gender: string;
  isKampret: boolean;
};

let myFriend: FriendType;

myFriend = {
  nama: 'Andi',
  usia: 20,
  gender: 'Male',
  isKampret: true,
};

console.log({ myFriend });

// Other Examples
type Female = string;
type Male = string;

let castorice: Female;
let aventurine: Male;

castorice = 'Female Quantum Rememberance';
aventurine = 'Male Imaginary Preservation ';

console.log({ castorice });
console.log({ aventurine });

// Union type
type Human = Male | Female;
type Alive = boolean;

let sayaAndi: Human;
sayaAndi = 'Andi Jafar';
console.log({ sayaAndi });

type earthRace = Human | Alive;
//  earthRace = string \  boolean

let juliantoGaming: earthRace;

juliantoGaming = 'Julianto';
juliantoGaming = true;
