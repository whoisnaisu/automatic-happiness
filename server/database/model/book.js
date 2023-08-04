const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let book = new Schema({
    name: {
        type: String
    },
    price: {
        type: String
    },
    description: {
        type: String
    }
}, {
    collection: 'books'
})

module.exports = mongoose.model('book', book)