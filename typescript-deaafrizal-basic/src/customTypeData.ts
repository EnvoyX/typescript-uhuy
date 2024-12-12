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
