import { MyDatabaseMetod } from "./db/my-database-metodo"
import { myDatabase, myDatabase as myDatabaseA } from "./module_a"

const MyDatabaseClassic = new MyDatabaseMetod;

MyDatabaseClassic.add({ name: "Luis", age: 15})
MyDatabaseClassic.add({name: "Sam", age: 18})
MyDatabaseClassic.remove(2)
MyDatabaseClassic.show()

console.log(MyDatabaseClassic === myDatabase)