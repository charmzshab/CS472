
// it is block scoped. 
// TDZ in creation phase
class Employee {
    #fullname;
    #salary;
    static #counter = 0;
    constructor(name, salary) {
        //this={}
        //
        this.#fullname = name;
        this.#salary = salary; //this.#setSalary(salary) 
        Employee.#incCounter();
        // return this; // implicit return
    }
    #setSalary(salary) {
        this.#salary = salary;
    }
    getSalary() {
        return this.#salary;
    }
    static #incCounter() {
        Employee.#counter++;
    }
    static getCounter() {
        return Employee.#counter;
    }
    get name() {
        return this.#fullname
    }
    set name(name) {
        this.#fullname = name;
    }
}

let emp = new Employee("John Doe", 50000);
// console.log(emp.getSalary()); // 50000
// console.log(emp.name);
// Error: Private field '#fullname' must be declared in an enclosing class
// console.log(Employee.getCounter()); // 1
// console.log(emp.name); // John Doe
// emp.name = "Anna Smith";
console.dir(emp);
console.dir(Employee.prototype)
console.dir(Employee);


// console.log(typeof Employee); // function
// console.log(Employee.prototype); // object
// console.dir(Employee);

// console.log(emp.__proto__ === Employee.prototype); // Employee.prototype
class Manager extends Employee {
    #bonus;
    constructor(n, s, b) {
        super(n, s);
        this.#bonus = b;
    }
    getSalary() {
        return super.getSalary() + this.#bonus;
    }
}

// let manager1 = new Manager("Jane Doe", 60000, 10000);
// let manager2 = new Manager("Anna Smith", 150000, 5000);
