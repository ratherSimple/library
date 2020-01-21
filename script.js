let myLibrary = [];
let count = 0;
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
    const removeButtons = Array.from(document.querySelectorAll(".remove-button"));
    removeButtons.forEach(button => button.addEventListener('click', removeBook));
}

function render(book) {
    const table = document.querySelector("#table");
    const tr = document.createElement('tr');
    tr.setAttribute("id", `book${book.index}`);
    for(let key in book) {
        const td = document.createElement('td');
        td.classList.add("table-item");
        if(key == "index") {
            const button = document.createElement('button');
            button.setAttribute("id", book["index"]);
            button.classList.add("remove-button");
            button.textContent = "Remove";
            td.appendChild(button);
            tr.appendChild(td);
            continue;
        }
        
        td.innerText = book[key];
        tr.appendChild(td);
    }
    const td = document.createElement('td');
    td.classList.add("table-item");
    const button = document.createElement('button');
    button.classList.add("toggle-button");
    button.textContent = "Toggle";
    td.appendChild(button);
    tr.appendChild(td);
    
    
    table.appendChild(tr);
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read? "Read" : "Not read yet";
    this.index = count++;
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

const removeButtons = Array.from(document.querySelectorAll(".remove-button"));
removeButtons.forEach(button => button.addEventListener('click', removeBook));

function removeBook() {
    let id = this.getAttribute("id");
    const toDelete = document.querySelector(`#book${id}`);
    toDelete.classList.add("hide");
}

const toggleButtons = Array.from(document.querySelectorAll(".toggle-button"));
toggleButtons.forEach(button => button.addEventListener('click', toggleRead));

function toggleRead() {
    let id = (this.parentNode.parentNode.getAttribute("id"));
    let index = id[id.length-1];
    let book = myLibrary[index];
    book.read = (book.read == "Read")? "Not read yet" : "Read";
    let tag = this.parentNode.previousSibling.previousSibling;
    tag.textContent = book.read;    
}


