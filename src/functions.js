function getBookById(books, bookId) {
    const result = books.find((book) => book.id === bookId);
    if (result) {
      return result;
    }
    throw new Error('No se encontró el libro');
}

function getBookIndexById(books, bookId) {
    const result = books.findIndex((book) => book.id === bookId);
    if (result !== -1) {
        return result;
      }
      throw new Error('No se encontró el índice del libro');
}

function bookExists(books, userId, moduleCode) {
    return  books.some((book) => book.userId === userId && book.moduleCode === moduleCode)
}

function booksFromUser(books, userId) {
    return books.filter((book) => book.userId === userId);
}

function booksFromModule(books, moduleCode) {
    return books.filter((book) => book.moduleCode === moduleCode);

}

function booksCheaperThan(books, price) {
    return books.filter((book) => book.price <= price);
}

function booksWithStatus(books, status) {
    return books.filter((book) => book.status.toLocaleLowerCase() === status.toLocaleLowerCase());  
}

function averagePriceOfBooks(books) {
    let result = books.reduce((total, book) => total += book.price, 0) 
    result = result / books.length
    return (isNaN(result))?  '0.00 €': result.toFixed(2) + ' €'
}

function booksOfTypeNotes(books) {
    return books.filter((book) => book.publisher === 'Apunts')
}

function booksNotSold(books) {
    return books.filter((book) => book.soldDate === '')
}

function incrementPriceOfbooks(books, percentage) {
    return books.map(book => ({...book, price: book.price + (book.price * percentage)}))
}

function getUserById(users, userId) {
    const result = users.find((user) => user.id === userId);
    if (result) {
      return result;
    }
    throw new Error('No se encontró el usuario');
}

function getUserIndexById(users, userId) {
    const result = users.findIndex((user) => user.id === userId);
    if (result !== -1) {
        return result;
      }
      throw new Error('No se encontró el índice del usuario');
}

function getUserByNickName(users, nick) {
    const result = users.find((user) => user.nick === nick);
    if (result) {
      return result;
    }
    throw new Error('No se encontró el usuario con el nick especificado');
}

function getModuleByCode(modules, moduleCode) {
    const result = modules.find((module) => module.code === moduleCode);
    if (result) {
        return result;
      }
      throw new Error('No se encontró el módulo');
}
  

export {
    getBookById,
    getBookIndexById,
    bookExists,
    booksFromUser,
    booksFromModule,
    booksCheaperThan,
    booksWithStatus,
    averagePriceOfBooks,
    booksOfTypeNotes,
    booksNotSold,
    incrementPriceOfbooks,
    getUserById,
    getUserIndexById,
    getUserByNickName,
    getModuleByCode
  }
