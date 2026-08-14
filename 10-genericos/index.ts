// function identidad(valor: number | string): number | string {
//   return valor;
// }

// const x = identidad(1000); // x es number
// const y = identidad("carlos"); // x es number

// interface User {
//   id: number;
//   name: string;
// }

// interface Product {
//   id: number;
//   price: number;
// }

// async function fetchAny<T>(
//   url: string,
// ): Promise<{
//   data: T;
//   status: number;
// }> {
//   const res = await fetch(url);
//   const data = await res.json();
//   return { data, status: res.status };
// }

// const user = await fetchAny<User>("/api/users");
// const product = await fetchAny<Product>("/api/product");

// async function fetchUser(url: string) {
//   const res = await fetch(url);
//   const data = (await res.json()) as User;
//   return { data, status: res.status };
// }

// const user = await fetchUser("www.app.com/users");

// async function fetchProduct(url: string) {
//   const res = await fetch(url);
//   const data = (await res.json()) as Product;
//   return { data, status: res.status };
// }

// const product = await fetchProduct("www.app.com/users");

// function par<A>(a: A, b: number): [A, number] {
//   return [a, b];
// }

// par(1, 5);
// par(true, 3);

// function nombreDe<T extends { name: string }>(item: T): string {
//   return item.name; // se puede acceder a .nombre porque T lo garantiza
// }

// nombreDe({ nombre: "carlos" });
// nombreDe({ nombre: "Carlos", profesion: "profesor" });
