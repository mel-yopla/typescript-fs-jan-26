// type ID = string;

// const a:ID = "carlos";

// interface Props {
//   isTrue: boolean
// }

type Gender = "M" | "F";
// type Gender = "M" & "F";

interface Person {
  firstName: string;
  lastName: string;
  age: number;
  address: string;
  gender: Gender;
}

interface Animal {
  specie: "can";
  age: string;
}

interface Gaviota extends Animal {}

const aquiles: Animal = {
  firstName: "aquiles",
  lastName: "rodriguez",
  age: 4,
  address: "Lima",
  specie: "can",
  gender: "M",
};

// interface Masculino extends Person {
//   gender: "M";
// }

// interface Femenina extends Person {
//   gender: "F";
// }

// const person:Person = {
//   firstName: "1",
//   lastName: "2",
//   age: 33,
//   address: "Lima"
// }

// person.gender = "dasd"

// interface Person {
//   gender: string;
// }

// type Person1 = {
//   firstName: string;
//   lastName: string;
//   age: number;
//   address: string;
// }

// type Person1 = {
//   gender: string;
// }

// interface Masculino extends Person {
//   gender: string;
// }

// const person: Person = {
//   firstName: "carlos",
//   lastName: "rodriguez",
//   age: 32,
//   address: "Lima",
//   gender: "masculino",
// };

// type Person1 = {
//   firstName: string;
//   lastName: string;
//   age: number;
//   address: string;
// };

// type Masculino = {
//   gender: string;
// };

// const carlos: Person1 & Masculino = {
//   firstName: "carlos",
//   lastName: "rodriguez",
//   age: 32,
//   gender: "masculino",
// };

// carlos.address =
