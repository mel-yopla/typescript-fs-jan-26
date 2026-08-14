// function describir(valor: string | number) {
//   // valor.toFixed();
// if (typeof valor === "string") {
//   return valor.toUpperCase(); // acá es string
// }
//   valor.toFixed();
//   return valor * 2; // acá es number
// }

// type Perro = { ladrar: () => void };
// type Gato = { maullar: () => void };

// function sonar(animal: Perro | Gato) {
//   if ("ladrar" in animal) { // {ladrar: () => {}} {maullar: () => {}}
//     animal.ladrar(); // es Perro
//   } else {
//     animal.maullar(); // es Gato
//   }
// }

// sonar({ ladrar: () => {} });

// type Figura =
//   { tipo: "circulo"; radio: number } | { tipo: "cuadrado"; lado: number };

// function area(figura: Figura): number {
//   switch (figura.tipo) {
//     case "circulo":
//       return Math.PI * figura.radio ** 2; // acá tiene radio
//     case "cuadrado":
//       return figura.lado ** 2; // acá tiene lado
//   }
// }

// area({tipo: "circulo", lado: 3 })
