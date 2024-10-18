import "./style.css";
import logoBatoi from "/logoBatoi.png";
import data from "./src/services/datos";
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

const myModules = new Modules();
myModules.populate(data.modules);

const myUsers = new Users();
myUsers.populate(data.users);

const myBooks = new Books();
myBooks.populate(data.books);

console.log(myBooks.booksFromModule("5021"));
console.log(myBooks.booksWithStatus("new"));
console.log(myBooks.incrementPriceOfbooks(0.1));
