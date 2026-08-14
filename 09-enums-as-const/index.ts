// enum Estado {
//   Pendiente = "pending",
//   Enviado = "sent",
//   Entregado = "received",
// }

// enum Currency {
//   USD = "dolares",
//   PEN = "soles"
// }

// type Size = "xs"| "md" | "lg" | "xl" ;

// interface ButtonProps {
//   size: Size
// }

// const Button = (props: Size) => {
//   return <button></button>
// }

// <Button size="md">

// type Estado2 = "pending" | "enviado" | "entregado"

// const actual2: Estado2 = "pending";

// const actual: Estado = Estado.Pendiente;

// const currency: Currency = Currency.USD

// const transferencia = {
//   currency
// }

// enum Estado {
//   Pendiente,
//   Enviado,
//   Entregado,
// }

// enum EmailConfirmed {
//   NotConfirmed, // 0 => false
//   Confirmed, // 1 => true
// }

// const actual: Estado = Estado.Pendiente;

// console.log(actual);

const COLORES = {
  Rojo: "rojo",
  Verde: "verde",
} as const;

COLORES.Rojo = "verde";

console.log(COLORES.Rojo);
