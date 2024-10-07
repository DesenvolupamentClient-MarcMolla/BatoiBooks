function getBookById(books, bookId) {
    const result = books.find((book) => book.id === bookId);
    if (result) {
      return result;
    }
    throw new Error('No se encontró el libro');
}

function getBookIndexById() {}

function bookExists() {}

function booksFromUser() {}

function booksFromModule() {}

function booksCheeperThan() {}

function booksWithStatus() {}

function averagePriceOfBooks() {}

function booksOfTypeNote() {}

function booksNotSold() {}

function incrementPriceOfbooks() {}

function getUserById() {}

function getUserIndexById() {}

function getUserByNickName() {}

function getModuleByCode() {}
  

export {
    getBookById,
    getBookIndexById,
    bookExists,
    booksFromUser,
    booksFromModule,
    booksCheeperThan,
    booksWithStatus,
    averagePriceOfBooks,
    booksOfTypeNote,
    booksNotSold,
    incrementPriceOfbooks,
    getUserById,
    getUserIndexById,
    getUserByNickName,
    getModuleByCode
  }
