console.log('Dea Afrizal');
console.log('Andi Jafar');

// Explicitly defined type daya
let myName: string = 'Hanif Hafizhan';
let username: string = 'Envoy';
let isDead: boolean = false;
let nim: number = 13523666;

// any type variable
let terserah: any = 'serah lu';
console.log({ terserah });
terserah = 10;
console.log({ terserah });

// Implicitly defined type data
let usia = 20;
let human = true;

// impossible to do this:
// usia = "andi"
// human = "hidup"

// Multiple defined type data
let myGirlfriend: string | number = '5';
console.log({ myGirlfriend });
myGirlfriend = 'Madam Herta';
console.log({ myGirlfriend });
// if (myGirlfriend) {
//   console.log('Wadaw');
// }

// Array biasa
let dataArray: any[];
dataArray = ['Andi Jafar', 'Unikom', 20, true];
let stringArray: string[];
let numberArray: number[];
stringArray = ['Andi', 'Jafar'];
numberArray = [50, 100];

console.log({ dataArray });
console.log({ stringArray });
console.log({ numberArray });

// Tuple
// Array yang elemen didalam nya terdefinisikan tipe datanya
let myHsrWaifu: [string, number, string, string, boolean];
myHsrWaifu = ['Acheron', 23, 'Self-Ahnillator', 'Nihility', true];

console.log({ myHsrWaifu });

console.log(myName);
console.log(username);
console.log(isDead);
console.log(nim);
