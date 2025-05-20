const students = [
  { id: 116257, name: "Anna Smith", program: "MBA" },
  { id: 615789, name: "John Doe", program: "Compro" },
  { id: 116868, name: "Tom Jerryh", program: "MBA" },
]


export default class Student {
  constructor(id, name, program) {
    this.id = id;
    this.name = name;
    this.program = program;
  }


  static getAll(startIndex, endIndex) {
    return structuredClone(students.slice(startIndex, endIndex))
  }


  static getStudentById(id) {
    return students.find((e) => e.id === id);
  }


  create() {
    let student = students.find((e) => e.id == this.id);
    if (!student) {
      students.push(this);
      return this;
    }
  }


  static deleteById(id) {
    const index = students.findIndex((e) => e.id == id);
    if (index !== -1) {
      return students.splice(index, 1)[0];
    }
  }


  static updateStudent(id, newName, newProgram) {
    const index = students.findIndex((s) => s.id === id);
    if (index === -1) {
      return null;
    }
    if (newName && newName.trim().length > 0) {
      students[index].name = newName.trim();
    }
    if (newProgram && newProgram.trim().length > 0) {
      students[index].program = newProgram.trim();
    }
    return students[index];
  }
}
