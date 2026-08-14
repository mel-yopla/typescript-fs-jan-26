// const teclado: { nombre: string; precio?: number } = {
//   nombre: "Teclado",
// };

// type nombreProducto = "Teclado" | "Mouse";

// type Producto = {
//   readonly nombre: string;
//   precio?: number;
// };

// const teclado: Producto = { nombre: "Teclado", precio: 120 };
// const mouse: Producto = { nombre: "Mouse", precio: 60 };
// const pantalla: Producto = { nombre: "Pantalla" };

// pantalla.nombre = "Keyboard";

type Producto = {
  nombre: string;
  precio: number;
  categorias: ["basico", "premium"];
  fabricante: {
    nombre: string;
    pais: string;
  };
};

// const pantalla: Producto = { nombre: "Pantalla" };
