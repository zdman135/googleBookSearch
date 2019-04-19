import axios from  'axios';

export default {
    searchBooks: function(searchQuery) {
        let query = encodeURI(searchQuery);
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&filter=partial`)
    },
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
      },
    findBook: function(bookId) {
        return axios.get(`/api/books/${bookId}`);
    },
    getAllBooks: function() {
        return axios.get('/api/books');
    },
    deleteBook: function(bookId) {
        return axios.delete(`/api/books/${bookId}`)
    }
};