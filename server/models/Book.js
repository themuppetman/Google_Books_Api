const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
  bookId: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  authors: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
  },
  image: {
    type: String,
  },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;