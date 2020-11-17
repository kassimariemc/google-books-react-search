import axios from "axios";

export default {
  // Gets all saved books from database
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  // Runs google api search
  searchBook: function(search) {
    return axios.get("/api/google/" + search);
  }
};
