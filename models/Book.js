const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    authors: {
        type: Array,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
});

let Book = mongoose.model("Book", BookSchema);

module.exports = Book;