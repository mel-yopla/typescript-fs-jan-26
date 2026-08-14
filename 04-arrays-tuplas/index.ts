// const puntajes: number[] = [10, 8, 9];
const puntajes: Array<number> = [10, 8, 9];
// puntajes.push(1000)
// puntajes.push("test")
// const nombres: string[] = ["Ana", "Luis"];
const nombres: Array<string> = ["Ana", "Luis"];

// const mapaBooleanos: boolean[] = [true, false, true];
const mapaBooleanos: Array<boolean> = [true, false, true];

// const prueba: (number | string)[] = [3, "carlos"];
const prueba: Array<string | number> = [3, "carlos"];

// const matrix: number[][]=  [[3]]
// const matrix: Array<Array<number>> = [[3]];

// const a = [];

// const coordenada: ["x" | "y", number] = ["x", 10];

// const matrix: [number, number][] = [[3, 3], [2, 1]];
// const matrix: Array<[number, number]> = [
//   [3, 3],
//   [2, 1],
// ];

// const dias: readonly string[] = ["lun", "mar", "mie", "jue", "vie"];

function sumar(numeros: number[]): number {
  return numeros.reduce((total, numero) => total + numero, 0);
}
