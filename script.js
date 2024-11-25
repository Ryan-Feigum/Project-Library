// Book constructor function
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Library array to hold books
let myLibrary = [];

// Function to add a book to the library
function addBookToLibrary(book) {
    myLibrary.push(book);
    renderLibrary();
}

// Function to remove a book from the library
function removeBook(i) {
    myLibrary.splice(i, 1);
    renderLibrary();
}

// Function to toggle read value
function toggleRead(i) {
    myLibrary[i].read = !myLibrary[i].read;
    renderLibrary();
}

// Function to render the library
function renderLibrary() {
    const booksContainer = document.getElementById('books-container');
    booksContainer.innerHTML = ''; // Clear existing books

    myLibrary.forEach((book, i) => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read: ${book.read ? "Yes" : "No"}</p>
            <button onclick="removeBook(${i})">Remove</button>
            <button onclick="toggleRead(${i})">Read</button>
        `;
        booksContainer.appendChild(bookDiv);
    });
}


// Form submission handler
document.getElementById('book-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    const newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);

    // Clear form fields
    e.target.reset();
});

// Toggle add book form visibility
document.getElementById('new-book-btn').addEventListener('click', function () {
    const formSection = document.getElementById('new-book-form');
    formSection.classList.toggle('hidden');
});
