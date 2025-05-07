//Exercise 01

class Meditation {
  constructor(minutes) {
    this.minutes = minutes;
  }

  start() {
    console.log(`Start meditation`);
    this.countdown(this.minutes);
  }

  countdown(mins) {
    let timeInterval = setInterval(() => {
      if (mins == 0) {
        console.log("Jay Guru Dev");
        clearInterval(timeInterval);
      } else {
        console.log(mins--);
      }
    }, 1000);
  }
}

const morning_meditation = new Meditation(5);
morning_meditation.start();

//Exercise 02

const isPrime = (n) => {
  for (let i = 2, s = Math.sqrt(n); i <= s; i++)
    if (n % i === 0) return Promise.reject(false);
  return Promise.resolve(n > 1);
};

async function isPrime(n) {
  for (let i = 2, s = Math.sqrt(n); i <= s; i++)
    if (n % i === 0) return Promise.reject(false);
  return Promise.resolve(n > 1);
}

console.log("start");
(async () => console.log(await isPrime(7)))();
console.log("end");

//Exercise 03

(async function fetchRecipes() {
  try {
    let response = await fetch("https://dummyjson.com/recipes");
    if (response.ok) {
      let json = await response.json();
      console.log(json);
    }
  } catch (error) {
    console.log(" HTTP- Error : " + response.status);
  }
})();
