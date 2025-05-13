// async function foo() { return "hello"; }
// console.log(foo());

// console.log('start');
// let x = 10;
// async function foo() {
//     console.log(1);
//     return "hello";
// }

// async function bar() {
//     console.log("before wait:", x);
//     let result = await foo();
//     console.log(result);
//     console.log("after wait:", x);
// }
// bar();
// console.log(bar());
// x = 40;
// console.log('end');

console.log('start');
let x = 10;
function foo() {
    console.log(1);
    return Promise.resolve("hello");
}

function bar() {
    console.log("before wait:", x);
    foo().then(result => {
        console.log(result);
        console.log("after wait:", x);
    })
    return Promise.resolve(undefined);
}
bar();
x = 40;
console.log('end');