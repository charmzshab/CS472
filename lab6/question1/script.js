// Question 1

let student = {
  firstName: "",
  lastName: "",
  grades: [],
  inputNewGrade: function (newGrade) {
    this.grades.push(newGrade);
  },
  computeAverageGrade: function () {
    if (this.grades.length == 0) return 0;
    let sum = this.grades.reduce((a, b) => a + b, 0);
    return sum / this.grades.length;
  },
};

let student1 = Object.create(student);
student1.firstName = "shaban";
student1.lastName = "charmz";
student1.grades = [];
student1.inputNewGrade(90);

let student2 = Object.create(student);
student2.firstName = "Kats";
student2.lastName = "Kibwana";
student2.grades = [];
student2.inputNewGrade(97);

let student3 = Object.create(student);
student3.firstName = "raldin";
student3.lastName = "hidalgo";
student3.grades = [];
student3.inputNewGrade(100);

let students = [student1, student2, student3];

//TODO: fix it to return one value in the console
students.forEach((student) => {
  let averageGrade = student.computeAverageGrade();
  console.log(averageGrade);
});

// Question2
function Student(firstName, lastName) {
  this.firstName = "";
  this.lastName = "";
  this.grades = "";
}

Student.prototype.inputNewGrade = function (newGrade) {
  this.grades.push(newGrade);
};

Student.computeAverageGrade = function () {
  if (this.grades.length == 0) return 0;
  let sum = this.grades.reduce((a, b) => a + b, 0);
  return sum / this.grades.length;
};
