const router = require("express").Router();
const googleBooksController = require("../../controllers/Books");

// Google Books Search routes
// Retrieve books saved from Google Books search results
/*
router.get("/get_books", googleBooksController.getBooks);

// Save books from Google Books search results
router.post("/save_book", googleBooksController.saveBook);

// Delete book from saved list of Google Books search results
router.put("/delete_book", googleBooksController.deleteBook);
*/

// Search for books by title using the Google Books API
router.get("/book_search", googleBooksController.bookSearch);

module.exports = router;
