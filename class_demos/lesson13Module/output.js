// import fs from "fs";

const fs = require("fs");

// process.nextTick(() => console.log("nextTick 1"));
// Promise.resolve().then(() => console.log("promise 1"));
// setImmediate(() => {
//   console.log("setImmediate 1");
// });
// // setImmediate(() => {
// //   console.log("setImmediate 1");
// //   process.nextTick(() => console.log("nextTick fn"));
// //   Promise.resolve().then(() => console.log("promise fn"));
// // });
// setTimeout(() => console.log("setTimeout 1"), 0);
// fs.readFile("./files/input.txt", "utf-8", (err, data) => {
//   if (err) console.log("there is an error. can not read from file");
//   else {
//     console.log(data);
//   }
// });

// index.js
// process.nextTick(() => console.log("this is process.nextTick 1"));
// process.nextTick(() => {
//     console.log("this is process.nextTick 2");
//     process.nextTick(() =>
//         console.log("this is the inner next tick inside next tick")
//     );
// });
// process.nextTick(() => console.log("this is process.nextTick 3"));

// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// Promise.resolve().then(() => {
//     console.log("this is Promise.resolve 2");
//     process.nextTick(() =>
//         console.log("this is the inner next tick inside Promise then block")
//     );
// });
// Promise.resolve().then(() => console.log("this is Promise.resolve 3"));

// process.nextTick(() => console.log("this is process.nextTick 1"));
// process.nextTick(() => {
//   console.log("this is process.nextTick 2");
//   process.nextTick(() =>
//     console.log("this is the inner next tick inside next tick")
//   );
// });
// process.nextTick(() => console.log("this is process.nextTick 3"));

// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// Promise.resolve().then(() => {
//   console.log("this is Promise.resolve 2");
//   process.nextTick(() =>
//     console.log("this is the inner next tick inside Promise then block")
//   );
// });
// Promise.resolve().then(() => console.log("this is Promise.resolve 3"));

//TODO:snippet is throwing error
// ENOENT: no such file or directory, open 'C:\Users\Hp\Documents\my_javascript_training\OOP Projects\WAP\class_demos\lesson13Module\files\moduleA.js'
// try {
//   const content = await fs.readFile("./files/moduleA.js", "utf8");
//   console.log("Module content:", content);
// } catch (err) {
//   console.error("Failed to read module file:", err);
// }

process.nextTick(() => console.log("nextTick 1"));

Promise.resolve().then(() => console.log("promise 1"));

setImmediate(() => {
  console.log("setImmediate 1");
});

setTimeout(() => console.log("setTimeout 1"), 0);

fs.readFile("./files/input.txt", "utf-8", (err, data) => {
  if (err) console.log("there is an error. can not read from file");
  else {
    console.log(data);
  }
});
