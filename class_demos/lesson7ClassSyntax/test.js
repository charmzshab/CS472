// function Employee(name, salary) {
//     this.name = name;
//     this.salary = salary;
// }
// Employee.prototype.getSalary = function () {
//     return this.salary;
// }
// Employee.prototype.getName = function () {
//     return this.name
// }
// Employee.compareBySalary = function (emp1, emp2) {
//     return emp1.salary - emp2.salary;
// }


// function Manager(n, s, b) {
//     Employee.call(this, n, s);
//     this.bonus = b;
// }
// Manager.prototype.getSalary = function () {
//     return Employee.prototype.getSalary.call(this) + this.bonus;
// }

// Object.setPrototypeOf(Manager.prototype, Employee.prototype);
// Object.setPrototypeOf(Manager, Employee);

// let mgr1 = new Manager("Jane Doe", 60000, 10000);
// console.log(mgr1.getSalary());
// console.log(mgr1.getName());

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
    getName() {
        return this.name
    }
    static compareBySalary(emp1, emp2) {
        return emp1.salary - emp2.salary;
    }
}

class Manager extends Employee {
    constructor(n, s, b) {
        super(this, n, s);
        this.bonus = b;
    }
    getSalary() {
        return super.getSalary() + this.bonus;
    }
}
let mgr1 = new Manager("Jane Doe", 60000, 10000);
console.log(mgr1.getSalary());
console.log(mgr1.getName());