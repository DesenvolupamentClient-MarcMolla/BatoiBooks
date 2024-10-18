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
myBooks.populate();

myBooks.addBook({
  "id": "112",
  "userId": 2,
  "moduleCode": "5025",
  "publisher": "Apunts",
  "price": 12,
  "pages": 25,
  "status": "good",
  "photo": "",
  "comments": "",
  "soldDate": "2023-02-01"
})

console.log(myBooks.toString());
