// question 3
function Animal(name, speed) {
  this.name = name;
  this.speed = speed;
}

function Rabbit(name) {
  Animal.call(this.name);
}

Object.setPrototypeOf(Rabbit.prototype, Animal.prototype);
Object.setPrototypeOf(Rabbit, Animal);

let rabbit1 = new Rabbit("brown rabbit");

Animal.prototype.run = function (speed) {
  this.speed = speed;
};

Animal.compareBySpeed = function (a1, a2) {
  return a1.speed - a2.speed;
};
