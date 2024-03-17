import { MyDatabaseMetod } from "./db/my-database-metodo"

const myDatabase = new MyDatabaseMetod;

myDatabase.add({ name: "Ana", age: 18})

export { myDatabase }