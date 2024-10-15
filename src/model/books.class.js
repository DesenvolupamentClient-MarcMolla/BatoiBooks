import Book from "./book.class";
export default class Books {
    constructor() {
        this.data = [];
    }

    populate(data) {
        this.data = data.map(item =>new Book(item));
    }

    addBook(book) {
        const lastId = this.data.reduce((maxId, book) => Math.max(maxId, book.id), 0);
        book.id = lastId + 1;
        book = new Book(book)
        this.data.push(book);
        return book;
    }

    removeBook(id) {
        const index = this.data.findIndex(item => item.id === id);
        if (index === -1) throw new Error('Book not found');
        this.data.splice(index, 1);
    }

    changeBook(book) {
        book = new Book(book);
        const index = this.data.findIndex(item => item.id === book.id);
        if (index === -1) throw new Error('Book not found');
        this.data[index] = book;
        return book;
    }

    toString() {
        return this.data.map(item => item.toString()).join('\n');
    }

    getBookById( bookId) {
        let result = this.data.find((book) => book.id === bookId);
        if (result) {
          return new Book(result);
        }
        throw new Error('No se encontró el libro');
    }
    
    getBookIndexById(bookId) {
        const result = this.data.findIndex((book) => book.id === bookId);
        if (result !== -1) {
            return result;
          }
          throw new Error('No se encontró el índice del libro');
    }
    
    bookExists(userId, moduleCode) {
        return  this.data.some((book) => book.userId === userId && book.moduleCode === moduleCode)
    }
    
    booksFromUser(userId) {
        return this.data.filter((book) => book.userId === userId);
    }
    
    booksFromModule(moduleCode) {
        return this.data.filter((book) => book.moduleCode === moduleCode);
    
    }
    
    booksCheaperThan(price) {
        return this.data.filter((book) => book.price <= price);
    }
    
    booksWithStatus(status) {
        return this.data.filter((book) => book.status.toLocaleLowerCase() === status.toLocaleLowerCase());  
    }
    
    averagePriceOfBooks() {
        let result = this.data.reduce((total, book) => total += book.price, 0) 
        result = result / this.data.length
        return (isNaN(result))?  '0.00 €': result.toFixed(2) + ' €'
    }
    
    booksOfTypeNotes() {
        return this.data.filter((book) => book.publisher === 'Apunts')
    }
    
    booksNotSold() {
        return this.data.filter((book) => book.soldDate === '')
    }
    
    incrementPriceOfbooks(percentage) {
        return this.data.map(book => ({...book, price: book.price + (book.price * percentage)}))
    }
    

}

