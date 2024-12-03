class StudentView {
    printStudentDetails(student) {
      return `Student Details:\nName: ${student.name}\nRoll No: ${student.rollNo}\nCourse: ${student.course}`;
    }
  }
  
  module.exports = new StudentView();