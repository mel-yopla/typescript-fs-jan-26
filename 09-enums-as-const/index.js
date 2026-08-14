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
var Estado;
(function (Estado) {
    Estado[Estado["Pendiente"] = 0] = "Pendiente";
    Estado[Estado["Enviado"] = 1] = "Enviado";
    Estado[Estado["Entregado"] = 2] = "Entregado";
})(Estado || (Estado = {}));
var actual = Estado.Pendiente;
console.log(actual);
