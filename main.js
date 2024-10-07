import { getBookById, getBookIndexById, bookExists, booksFromUser, booksFromModule, booksCheaperThan, booksWithStatus, averagePriceOfBooks, booksOfTypeNotes, booksNotSold, incrementPriceOfbooks, getUserById, getUserIndexById, getUserByNickName, getModuleByCode } from './src/functions.js';
import data from './src/services/datos.js';

const books = data.books
const users = data.users
const modules = data.modules

document.querySelector('#app').innerHTML = `
 
  <p>
    Abre la consoloa para ver el resultado.
  </p>

`

console.log("Books:")
console.log(books)

console.log("Libros del usuario 4:")
console.log(booksFromUser(books, 4))

console.log("Libros del modulo 5021")
try {
  const modulesCode5021 = booksFromModule(books, "5021")

} catch (error) {
  console.error(error)
}
console.log(booksWithStatus(modulesCode5021, "good"))

console.log("Incremento del 10% en el precio de los libros")
console.log(incrementPriceOfbooks(books, 10))