const Student = require('../models/student');
const StudentView = require('../views/StudentView');

class StudentController {
  // Get student details and display via View
  getStudentDetails(req, res) {
    const student = Student.getStudentDetails();
    const studentDetails = StudentView.printStudentDetails(student);
    res.send(studentDetails);
  }

  // Set student details via request body
  setStudentDetails(req, res) {
    const { name, rollNo, course } = req.body;
    Student.setStudentDetails({ name, rollNo, course });
    res.send('Student details updated successfully.');
  }
}

module.exports = new StudentController();