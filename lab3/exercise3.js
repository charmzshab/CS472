"use strict";

let libraryBooks = [
  { title: "The Road Ahead", author: "Bill Gates", ID: 1235 },
  { title: "Walter Isaacson", author: "Steve Jobs", ID: 4268 },
  { title: "The Road Ahead", author: "Bill Gates", ID: 4268 },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    ID: 3257,
  },
];

// Add a new book if it doesn't already exist (based on title, author, and ID)
function addBook(title, author, ID) {
  const exists = libraryBooks.some(
    (book) => book.title === title && book.author === author && book.ID === ID
  );

  if (!exists) {
    const newBook = { title, author, ID };
    libraryBooks.push(newBook);
    return newBook;
  } else {
    return null; // Book already exists
  }
}

// Return an alphabetically sorted array of book titles
function getTitles() {
  return libraryBooks
    .map((book) => book.title)
    .sort((a, b) => a.localeCompare(b));
}

// Find books by keyword in the title, sorted by ID
function findBooks(keyword) {
  return libraryBooks
    .filter((book) => book.title.toLowerCase().includes(keyword.toLowerCase()))
    .sort((a, b) => a.ID - b.ID);
}

// --- Example Usage ---
console.log("Added:", addBook("New Book", "Author X", 1111));
console.log("Titles:", getTitles());
console.log("Books with 'road':", findBooks("road"));
