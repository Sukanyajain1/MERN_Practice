const StudentController = require("../controllers/student.controller")


// routes here
module.exports = (app) => {
    app.get("/api/students", StudentController.findAllStudents);
    app.post("/api/students/new", StudentController.createStudent);
    app.get("/api/students/random", StudentController.findRandomStudent);  //best practice to put all the string variable urls at the top and then put any param routes toward the bottom.
    app.get("/api/students/show_one/:id", StudentController.findOneStudent);
    app.put("/api/students/update/:id", StudentController.updateStudent);
    app.delete("/api/students/delete/:id", StudentController.deleteStudent);
    
    


}