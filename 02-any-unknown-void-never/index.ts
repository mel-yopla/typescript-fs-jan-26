// let a: any = "carlos";

// * Quitar any y tienes el autocompletado
// a.test();

// let dato: unknown = "texto";
// dato.
// dato.test();
// if (typeof dato === "string") {
//   dato.charAt(3);
// }

function registrar(mensaje: string): void {
  console.log(mensaje);
}

// const a = (): void => a;

function fallar(mensaje: string): never {
  console.log("Hola mundo");
  throw new Error(mensaje);
}

function loop(): never {
  while (true) {
    console.log(5);
  }
}

// loop();
let key: 3 | 5 = 3;

switch (key) {
  case 3:
    console.log(key);
    break;
}
