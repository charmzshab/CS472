// function User(name) {
//     this.name = name; this.isAdmin = false;
// }
// console.dir(User);
'use strict'
function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;

    // return this;
}

let person = new Person("Tom", "Doe");
let person2 = Person("Smith", "Karry");



// Person.prototype.getFullName = function () {
//     return this.firstname + " " + this.lastname;
// }

// Person.prototype.toString = function () {
//     return this.firstname;
// }
// Person.compareByFirstname = function (p1, p2) {
//     return p1.firstname.localeCompare(p2.firstname)
// }

// function Employee(firstname, lastname, salary) {
//     //this={}
//     Person.call(this, firstname, lastname); // super(f,l)
//     this.salary = salary;

// }
// Employee.prototype.getSalary = function () {
//     return this.salary;
// }
// Employee.prototype.toString = function () {
//     return Person.prototype.toString.call(this) + " " + this.salary;
// }
// Employee.compareBySalary = function (e1, e2) {
//     return e1.salary - e2.salary;
// }
// Object.setPrototypeOf(Employee.prototype, Person.prototype);
// Object.setPrototypeOf(Employee, Person)

// let emp1 = new Employee("Tom", "Doe", 150000);
// console.log(emp1.getFullName());
// console.log(emp1.getSalary());

// let emp2 = new Employee("Smith", "Karry", 100000);
// let emp3 = new Employee("Anna", "Smith", 120000);
// let emps = [emp1, emp2, emp3];
// console.log(emps.sort(Employee.compareByFirstname));
// console.log(emps.sort(Employee.compareBySalary))

// console.log(emp1.toString());

// let arr = [1, 2, 3];
