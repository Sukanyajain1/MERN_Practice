const Student = require("../models/student.model"); // import the model so that the controller knows how to talk to the database to query the database.


module.exports.findAllStudents = (req, res) => {
    Student.find() // will find ALL
        .then(allStudents => {
            res.json({count: allStudents.length, results: allStudents})
        })
        .catch(err => {
            res.json({msg: "Something went wrong: ", error: err})
        })
}

module.exports.createStudent = (req, res) => {
    //req.body represents form information
    Student.create(req.body)
        .then(newlyCreatedStudent =>{
            res.json({results: newlyCreatedStudent})
        })
        .catch(err => {
            res.json({msg: "Something went wrong: ", error: err})
        })
}

module.exports.findOneStudent = (req, res) => {
    Student.findOne({_id: req.params.id})
        .then(foundStudent => {
            res.json({results: foundStudent})
        })
        .catch(err => {
            res.json({msg: "Something went wrong: ", error: err})
        })
}

module.exports.updateStudent = (req, res) => {
    Student.findOneAndUpdate (
        {_id: req.params.id}, //specify which student to update
        req.body, //specify the form information to update the student with
        {new: true, runValidators: true}
    )
        .then(updatedStudent => {
            res.json({results: updatedStudent})
        })
        .catch(err => {
            res.json({msg: "Something went wrong: ", error: err})
        })
}

module.exports.deleteStudent = (req, res) => {
    Student.findOneAndDelete ({_id: req.params.id})
        .then(deletedStudent => {
            res.json({results: deletedStudent})
        })
        .catch(err => {
            res.json({msg: "Something went wrong: ", error: err})
        })
}

module.exports.findRandomStudent = (req, res) => {
    Student.find()
        .then(allStudents => {
            // get a random index number from index 0 up to but not including the allStudents.length
            let randomIdx = Math.floor(Math.random() * allStudents.length)


            res.json({count: allStudents.length, results: allStudents[randomIdx]})
        })
        .catch(err => {
            res.json({msg: "Something went wrong: ", error: err})
        })
}