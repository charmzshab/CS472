let animal = { eats: true }
console.dir(animal)
console.log(animal.toString());
let rabbit = { jumps: true, __proto__: animal };

// Object.setPrototypeOf(rabbit, animal);
console.log(rabbit); // Set the prototype of rabbit to animal
console.log(rabbit.__proto__); 