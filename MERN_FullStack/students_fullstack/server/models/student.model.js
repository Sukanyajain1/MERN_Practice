const mongoose = require('mongoose');


// purpose of this file is to describe how our students table (collection) should look like
const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        minlength:[2, "Name must be at least 2 characters!"]
    },
    numOfProjects:{
        type: String,
        required: [true, "Number of Projects is required!"],
        minlength:[0, "You can't have less than 0 projects!"]
    },
    gradDate:{
        type: Date,
        required: [true, "Date is required!"],
        min:["2012-01-01", "Date can't be earlier than 2012!"],
    },
    // if you wnat an optional field, you don't need the required part. Just the type.
    isVeteran: {
        type: Boolean
    }
}, {timestamps: true})



const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;