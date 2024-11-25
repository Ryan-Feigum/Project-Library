const myLibrary = [];

function Book() {
    // Book constructor
    this.title = "",
    this.author = "",
    this.pages = 0,
    this.read = false;
}

function addBookToLibrary() {
    // Add a book to the library
    let book = new Book();
    book.title = prompt("Enter book title:");
    book.author = prompt("Enter book author:");
    book.pages = prompt("Enter book pages:");
    book.read = prompt("Have you read this book?") === "yes";
}