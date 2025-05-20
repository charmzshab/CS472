import Student from "../model/student.js";

const studentController = {

  getStudents: (req, res, next) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 100;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    return res.status(200).json(Student.getAll(startIndex, endIndex));
  },

  getStudentById: (req, res, next) => {
    const id = req.params.id;
    if (id) {
      const student = Student.getStudentById(id * 1);
      if (student) {
        res.status(200).json(student);
      } else res.status(404).json({ message: `No Student found with ID: ${id}` });
    } else res.status(400).json({ message: "provide id" });
  },

  createStudent: (req, res, next) => {
    const { id, name, program } = req.body;
    if (id && name && program) {
      const student = new Student(id * 1, name, program);
      if (student.create()) {
        res.status(201).json({ message: "created" });
      } else {
        res.status(409).json({ message: "Student exists already" });
      }
    } else {
      res.status(400).json({ message: "Provide all information" });
    }
  },

  deleteStudentById: (req, res, next) => {
    const id = req.params.id;
    if (id) {
      if (Student.deleteById(id))
        res.status(200).json({ message: "student deleted" });
      else res.status(404).json({ message: "student not found" });
    } else res.status(400).json({ message: "provide all information" });
  },

  updateStudentById: (req, res, next) => {
    const { id } = req.params;
    const { name: newName, program: newProgram } = req.body;

    if (!newName && !newProgram) {
      res.status(400).json({ message: "Nothing to Update." });
      return;
    }
    const student = Student.updateStudent(id * 1, newName, newProgram);
    if (student) {
      res.status(200).json(student);
    } else {
      res.status(404).json({ message: `Student with ID: ${id} not found.` });
    }
  },
}

export default studentController;
