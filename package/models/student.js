class Student {
    constructor() {
      this.data = {
        name: '',
        rollNo: '',
        course: '',
      };
    }
  
    // Get student details
    getStudentDetails() {
      return this.data;
    }
  
    // Set student details
    setStudentDetails({ name, rollNo, course }) {
      if (name) this.data.name = name;
      if (rollNo) this.data.rollNo = rollNo;
      if (course) this.data.course = course;
    }
  }
  
  module.exports = new Student();
  