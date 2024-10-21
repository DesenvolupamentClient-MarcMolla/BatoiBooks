import Book from "./book.class";
import api from "../services/books.api"
export default class Books {
  constructor() {
    this.data = [];
  }

  async populate() {
    try{
      const books = await api.getDBBooks();
      this.data = books.map(book => new Book(book));
    }catch(error){
      console.error(error);
    }
    
  }

  addBook(book) {
    const lastId = this.data.reduce(
      (maxId, book) => Math.max(maxId, book.id),
      0,
    );
    book.id = lastId + 1;
    book = new Book(book);
    this.data.push(book);
    api.addDBBook(book);
    return book;
  }

  async removeBook(id) {
    const index = this.data.findIndex((item) => item.id === id);
    if (index === -1) throw new Error("Book not found");
    try{
      const book = await api.getDBBook(id)
      await  api.removeDBBook(index)
    }catch(error){
      console.log(error)
    }
   

    this.data.splice(index, 1);
   
  }

  async changeBook(book) {
    book = new Book(book);
    const index = this.data.findIndex((item) => item.id === book.id);
    if (index === -1) throw new Error("Book not found");

    try{
      await api.changeDBBook(book)
    }catch(error){
      console.log(error)
    }

    this.data[index] = book;
    return book;
  }

  toString() {
    return this.data.map((item) => item.toString()).join("\n");
  }

  getBookById(bookId) {
    let result = this.data.find((book) => book.id === bookId);
    if (result) {
      return new Book(result);
    }
    throw new Error("No se encontró el libro");
  }

  getBookIndexById(bookId) {
    const result = this.data.findIndex((book) => book.id === bookId);
    if (result !== -1) {
      return result;
    }
    throw new Error("No se encontró el índice del libro");
  }

  bookExists(userId, moduleCode) {
    return this.data.some(
      (book) => book.userId === userId && book.moduleCode === moduleCode,
    );
  }

  booksFromUser(userId) {
    return this.data.filter((book) => book.userId === userId);
  }

  booksFromModule(moduleCode) {
    return this.data.filter((book) => book.moduleCode.toString() == moduleCode.toString());
  }

  booksCheeperThan(price) {
    return this.data.filter((book) => book.price <= price);
  }

  booksWithStatus(status) {
    return this.data.filter(
      (book) => book.status.toLocaleLowerCase() === status.toLocaleLowerCase(),
    );
  }

  averagePriceOfBooks() {
    let result = this.data.reduce((total, book) => (total += book.price), 0);
    result = result / this.data.length;
    return isNaN(result) ? "0.00 €" : result.toFixed(2) + " €";
  }

  booksOfTypeNotes() {
    return this.data.filter((book) => book.publisher === "Apunts");
  }

  booksNotSold() {
    return this.data.filter((book) => book.soldDate === "");
  }

  incrementPriceOfbooks(percentage) {
    return this.data.map((book) => ({
      ...book,
      price: book.price + book.price * percentage,
    }));
  }
}
