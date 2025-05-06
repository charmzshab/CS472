// Question 1

// function Student(studentId) {
//   this.studentId = studentId;
//   this.answers = [];
// }

// Student.prototype.addAnswer = function (question) {
//   this.answers.push(question);
// };

// function Question(qid, answer) {
//   this.qid = qid;
//   this.answer = answer;
// }

// Question.prototype.checkAnswer = function (answer) {
//   return this.answer === answer;
// };

// function Quiz(questions, students) {
//   this.questions = new Map();
//   for (let q of questions) {
//     this.questions.set(q.qid, q);
//   }
//   this.students = students;
// }

// Quiz.prototype.scoreStudentBySid = function (sid) {
//   let student = this.students.find((std) => std.studentId == sid);
//   if (!student) return 0;
//   let score = 0;
//   for (let std of student.answers) {
//     let question = this.questions.get(std.qid);
//     if (question.checkAnswer(std.answer)) score++;
//   }
//   return score;
// };

// Quiz.prototype.getAverageScore = function () {
//   if (this.students.length == 0) return 0;
//   let totalScore = 0;
//   for (let student of this.students) {
//     totalScore += this.scoreStudentBySid(student.studentId);
//   }
//   return totalScore / this.students.length;
// };

//Question 2

class Student {
  constructor(stdId) {
    this.studentId = stdId;
    this.answers = [];
  }

  addAnswer(question) {
    this.answers.push(question);
  }
}

class Question {
  constructor(qid, answer) {
    this.qid = qid;
    this.answer = answer;
  }

  checkAnswer(answer) {
    return this.answer === answer;
  }
}

class Quiz {
  constructor(questions, students) {
    this.questions = new Map();
    for (let q of questions) {
      this.questions.set(q.qid, q);
    }
    this.students = students;
  }

  scoreStudentBySid(sid) {
    let student = this.students.find((std) => std.studentId == sid);
    if (!student) return 0;
    let score = 0;
    for (let std of student.answers) {
      let question = this.questions.get(std.qid);
      if (question.checkAnswer(std.answer)) score++;
    }
    return score;
  }

  getAverageScore() {
    if (this.students.length == 0) return 0;
    let totalScore = 0;
    for (let student of this.students) {
      totalScore += this.scoreStudentBySid(student.studentId);
    }
    return totalScore / this.students.length;
  }
}

// ----testing---
const student1 = new Student(10);
student1.addAnswer(new Question(2, "a"));
student1.addAnswer(new Question(3, "b"));
student1.addAnswer(new Question(1, "b"));
const student2 = new Student(11);
student2.addAnswer(new Question(3, "b"));
student2.addAnswer(new Question(2, "a"));
student2.addAnswer(new Question(1, "d"));
const students = [student1, student2];
const questions = [
  new Question(1, "b"),
  new Question(2, "a"),
  new Question(3, "b"),
];
const quiz = new Quiz(questions, students);
let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); //Expected Result: 3
let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); //Expected Result: 2
let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5
