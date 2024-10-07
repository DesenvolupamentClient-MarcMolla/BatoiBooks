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
try {
  console.log(getBookById(data.books,'macaco'))
} catch (error) {
  console.error(error)
}



console.log(getModuleByCode(modules,'9999'))