let user = {
    firstname: "Anna",
    lastname: "Smith",
    display: function () {
        console.log(this.firstname + " " + this.lastname);
    },
    "billing address": {
        city: "New York",
        state: "NY",
        country: "USA"
    },
}
console.log(user?.display1?.());
//square notation
// console.log(user["billing address"].city);
// console.log(user["billing address"]["city"]);
// console.log(user["display"]());
// console.log(user["firstname"]);
//dot notation
// console.log(user.firstname);

// user.display();
// user.firstname = "John";
// // console.log(user);
// user.age = 25

// delete user.age;
// console.log(user);

// let arr = Object.values(user)
// console.log(arr);

// let arr1 = [1, "Hello", true, null, undefined, { name: "John" }, [1, 2, 3]];

// let arr = Object.entries(user)
// console.log(arr);

// let student = {}
// Object.assign(student, user)
// console.log(person);
// console.log(student);

// let person = { firstname: "John", lastname: "Smith" };
// let student = Object.create(person);
// console.log(student); // John
// console.log(student.firstname); // John
