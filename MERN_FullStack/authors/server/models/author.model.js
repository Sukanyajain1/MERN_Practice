const mongoose = require('mongoose');


// purpose of this file is to describe how our Authors table (collection) should look like
const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name of author is required!"],
        minlength:[3, "Name of author must be at least 3 characters!"]
    }
}, {timestamps: true})



const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;