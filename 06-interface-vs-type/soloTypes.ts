// 1
type Id = string | number;

// interface Test {
//   id: Id;
// }

// 2
type Coordenada = [number, number];

// interface Mapa {
//   coordenada: [number, number]
// }

// interface Coordenada { [number, number]}

// 3
type Estado = "activo" | "inactivo";

// interface User {
//   estado: Estado;
// }

// 4
interface Usuario {
  id: number;
  nombre: string;
  email?: string;
}

type UsuarioFlags = {
  [K in keyof Usuario]?: boolean;
};
