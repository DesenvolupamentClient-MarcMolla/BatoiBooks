import "./style.css";
import logoBatoi from "/logoBatoi.png";
import Modules from "./src/model/modules.class";
import Users from "./src/model/users.class";
import Books from "./src/model/books.class";

document.querySelector("#app").innerHTML = `
  <div class="contenedor">
    <img src="${logoBatoi}" class="logo" alt="Batoi"/>
    <h1>BatoiBooks</h1>
    <p>Abre la consola para ver el resutlado.</p>
  </div>
`;

const myBooks = new Books();
await myBooks.populate();

const myUsers = new Users();
await myUsers.populate();

const myModules = new Modules();
await myModules.populate();

console.log(myBooks)


console.log(myBooks.booksFromModule(5021))
console.log(myBooks.booksWithStatus('new'))
console.log(myBooks.incrementPriceOfbooks(0.1))

 