import { getBookById, getBookIndexById, bookExists, booksFromUser, booksFromModule, booksCheeperThan, booksWithStatus, averagePriceOfBooks, booksOfTypeNote, booksNotSold, incrementPriceOfbooks, getUserById, getUserIndexById, getUserByNickName, getModuleByCode } from './src/functions.js';
import data from './src/services/datos.js';

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
