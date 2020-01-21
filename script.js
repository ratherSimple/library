let myLibrary = [];

function addBookToLibrary(form) {
    let elements = form.elements;
    let title = elements[1].value;
    let author = elements[2].value;
    let pages = elements[3].value;
    let read = elements[4];
    const newBook = new Book(title, author, pages, read.checked );
    myLibrary.push(newBook);
    render(newBook);
    form.reset();
}

function render(book) {
    const table = document.querySelector("#table");
    const tr = document.createElement('tr');
    for(let key in book) {
        const td = document.createElement('td');
        td.classList.add("table-item");
        td.innerText = book[key];
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read? "Read" : "Not read yet";
    }

let lotr = new Book("LOTR", "JRR Tolkien", "500", true);
let hp = new Book("Harry Potter", "JK Rowling", "1000", true);
let cats = new Book("Cats", "Unknown", "200", false);
let mazeRunner = new Book("Maze Runner", "Unknown", 300, true);
myLibrary.push(lotr, hp, cats, mazeRunner);

myLibrary.forEach(book => render(book));
const form  = document.querySelector("#form");
const button = document.querySelector("#submit-form");
button.addEventListener('click', button => addBookToLibrary(form));