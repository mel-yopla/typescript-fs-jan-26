// type UsuarioOptional = {
//   id?: number;
//   name?: string;
//   age?: number;
//   created_at?: Date;
//   updated_at?: Date;
// };

// type CreateUserOptional = Partial<Usuario>
// type CreateUserRequired = Required<Usuario>

// function toCreateUser(user: CreateUser): Usuario {
//   const createdUser = db.create(user);
//   return createdUser;
// }

// type Usuario = { id: number; nombre: string; email: string };

// type Resumen = Pick<Usuario, "id" | "nombre">;
// type SinEmail = Omit<Usuario, "email" | "nombre">;

// type Inventario = Record<string, number>;

// const stock: Inventario = { manzanas: 3, peras: 5 }
