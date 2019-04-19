const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let BookSchema = new Schema({
    bookId: {
        type:String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    authors: {
        type: Array
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    link: {
        type: String,
    }
});

let Book = mongoose.model("Book", BookSchema);

module.exports = Book;