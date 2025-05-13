// "use strict";

//global context this referes to the global object ----------------------
// console.log(this);
// console.log(window === this);

//in regular function ------------------------------------------------------
// in strict mode, this remains as undefined
// in normal mode, this will be window

// "use strict";
// function greet() {
//     console.log(this);
// }
// greet();

// when function called from within another function

// "use strict";
// function outer() {
//     function inner() {
//         console.log(this);
//     }
//     inner();
// }
// outer();

//method call --------------------------------------------------------------
// 'use strict'
let greetings = "hello"
let user = {
    firstName: "John",
    sayHi: function (str) {
        console.log(this, str);
        console.log(this.firstName);
        console.log(greetings);

    }
};
user.sayHi("Hello");
let func = user.sayHi;
func()

func.bind(user)("hello");
func.bind(user, "hello")();
func.apply(user, ["hello"]);
func.call(user, "hello");



// let a = 38;
// function display() {
//     let b = 25;
//     let user = {
//         firstName: "John",
//         sayHi: function () {
//             console.log(this); //user
//             console.log(this.firstName);//John
//             console.log(a, b);//25,38
//         }
//     };
//     user.sayHi();
// }
// display();



// function display(msg) {
//     console.log(this.firstname, msg);
// }

// let user1 = {
//     firstname: "John"
// }
// let user2 = {
//     firstname: "Anna"
// }
// display.apply(user1, ["Hello", "Gee"]);
// display.call(user2, "Hello", "Gee");
// display.bind(user1, "Hello")();
// display.bind(user1)("Hello");


// const user = {
//     salute: "",
//     greet: function () {
//         this.salute = "Hello";
//         console.log(this.salute); //Hello

//         let setFrench = newSalute => this.salute = newSalute;
//         setFrench("Bonjour");
//         console.log(this.salute); //Bonjour
//     }
// };

// user.greet();

//Arrow function -------------------------------------

// let display = () => console.log(this); //window
// display();


// let user = {
//     firstname: "Anna",
//     display: () => console.log(this)
// }
// user.display();


// function show(msg) {
//     console.log(msg, this);
//     let display = () => console.log(this);
//     let obj = { firstname: "John" }
//     // display.call(obj);

// }
// let user = { firstname: "Anna" }
// show.call(user, "Hello");


// let user = {
//     name: "John"
// }

// let anotherUser = {
//     name: "Anna"
// }

// function display(arg) {
//     console.log(this.name, arg);
// }
// // display("Hello");


// display.call(user, 15);//this = user
// display.call(anotherUser, 20);


// const user = {
//     salute: "",
//     greet: function () {
//         this.salute = "Hello";
//         console.log(this.salute);
//         const setFrench = function (newSalute) { //inner function
//             this.salute = newSalute;
//             console.log(this);
//         };
//         setFrench("Bonjour");
//         console.log(this.salute);
//     }
// };
// user.greet();


//Self pattern
// const user = {
//     salute: "",
//     greet: function () {
//         const self = this;
//         self.salute = "Hello";
//         console.log(this.salute);
//         const setFrench = function (newSalute) {
//             self.salute = newSalute;
//         };
//         setFrench("Bonjour");
//         console.log(this.salute);
//     }
// };
// user.greet();

//arrow function
// const user = {
//     salute: "",
//     greet: function () {
//         this.salute = "Hello";
//         console.log(this.salute);
//         const setFrench = (newSalute) => {
//             this.salute = newSalute;
//         };
//         setFrench("Bonjour");
//         console.log(this.salute);
//     }
// };
// user.greet();

// //call, apply, bind
// const user = {
//     salute: "",
//     greet: function () {
//         self.salute = "Hello";
//         console.log(this.salute);
//         const setFrench = function (newSalute) { //inner function
//             this.salute = newSalute;
//         };
//         setFrench.call(this, "Bonjour");
//         console.log(this.salute);
//     }
// };
// user.greet();




// const me = {
//     first: 'John',
//     last: 'Smith',
//     getFullName: function () {
//         return this.first + ' ' + this.last;
//     }
// }

// function log(height, weight) {
//     console.log(this);
//     console.log(this.getFullName(), height, weight);
// }
// log();
// const logMe = log.bind(me);
// logMe('180cm', '70kg'); // John Smith 180cm 70kg

// log.call(me, '180cm', '70kg'); // John Smith 180cm 70kg
// log.apply(me, ['180cm', '70kg']); // John Smith 180cm 70kg
// log.bind(me, '180cm', '70kg')(); // John Smith 180cm 70kg


// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],

//     showList: function () {
//         this.students.forEach(function (student) {
//             // error – ‘this’ is undefined (or window)
//             console.log(this.title + ": " + student);
//         });
//     }
// };
// group.showList();


// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],

//     showList: function () {
//         let self = this;
//         this.students.forEach(function (student) {
//             // error – ‘this’ is undefined (or window)
//             console.log(self.title + ": " + student);
//         });
//     }
// };
// group.showList();
