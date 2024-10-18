export default class Book {
  constructor(book) {
    this.id = book.id;
    this.userId = book.userId;
    this.moduleCode = book.moduleCode;
    this.publisher = book.publisher;
    this.price = book.price;
    this.pages = book.pages;
    this.status = book.status;
    this.photo = book.photo || "";
    this.comments = book.comments || "";
    this.soldDate = book.soldDate || "";
  }

  toString() {
    return `ID: ${this.id}, User ID: ${this.userId}, Price: ${this.price}, Status: ${this.status}`;
  }
}
