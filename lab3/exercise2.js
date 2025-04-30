"use strict";

let user = { name: "John", years: 30 };

// Destructuring assignment
let { name, years: age, isAdmin = false } = user;
