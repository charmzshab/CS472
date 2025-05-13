// let arr = [1, 2, 3, 4, 5]
// console.log(arr[0]);
// console.log(arr.at(0), arr.at(-1));

// arr.push(6);
// console.log(arr);
// arr.unshift(0);
// console.log(arr);
// arr.shift();
// console.log(arr);

// console.log(arr.includes(3));// ===
// console.log(arr.includes(7));

// let newArr = arr.map((item, index, array) => {
//     console.log(item, index, array);
//     return item * 2;
// })
// console.log(newArr);

// let persons = [{ name: "John", age: 25 }, { name: "Anna", age: 30 }]
// console.log(persons.includes({ name: "John", age: 25 })); // refernce is used 
// let person = persons.find((item) => item.name === "Smith");
// console.log(person);


// let index = persons.findIndex((item) => item.name === "John");//-1
// console.log(index);
// // let friuts = ["banana", "apple", "orange", "kiwi"];
// console.log(Array.isArray(persons));


// console.log([1, 15, 16, 11, 21].sort((a, b) => a - b));
// console.log([1, 15, 16, 11, 21].reduce((acc, item) => acc + item, 0));
// delete friuts[2];
// friuts.splice(2, 1);
// console.log(friuts);

// let newFruits = friuts.filter((item) => item !== 'orange')
// console.log(newFruits);
// friuts.forEach((item) => {
//     console.log(item);
// })

// for (let friut of friuts) {
//     console.log(friut);
// }
// for (let i = 0; i < friuts.length; i++) {
//     console.log(friuts[i]);
// }

// for (let key in friuts) {
//     console.log(friuts[key]);
// }

let students = [
    { name: "John", age: 25 },
    { name: "Smoth", age: 23 },
    { name: "Jane", age: 30 }]

// 1.	Pls find the average age of students.
let avg = students.reduce((acc, item) => acc + item.age, 0) / students.length

// 2.	Sort the array by name in descending order.
students.sort((a, b) => b.name.localeCompare(a.name))
console.log(students);

// 3.	Find a student whose name starts with J.
let student = students.find((item) => item.name.startsWith("J"))

// 4.	Find all students whose name starts with J.
let studentsWithJ = students.filter((item) => item.name.startsWith("J"))

// 5.	Destructure the array’s second element to name and age variables. 
let { name, age } = students[1]; // or   let [, { name, age }] = students;
console.log('name', name, 'age', age);
