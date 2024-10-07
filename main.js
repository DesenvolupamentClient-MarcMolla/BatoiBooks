import { getBookById, getBookIndexById, bookExists, booksFromUser, booksFromModule, booksCheeperThan, booksWithStatus, averagePriceOfBooks, booksOfTypeNote, booksNotSold, incrementPriceOfbooks, getUserById, getUserIndexById, getUserByNickName, getModuleByCode } from './functions.js';
import {data} from './datos.js';

document.querySelector('#app').innerHTML = `
 
  <p>
    Abre la consoloa para ver el resultado.
  </p>

`

