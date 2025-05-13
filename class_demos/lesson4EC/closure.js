//calling inner function
function init() {
    const name = "Mozilla";
    function displayName() {
        console.log(name); //like in Java, nested functions have access to variables declared in their outer scope
    }
    return displayName;
    // console.dir(displayName);
}
let display = init();
display()

//Returning an inner function
// function makeFunc() {
//     const name = "Mozilla"; //local to makeFunc
//     function displayName() {
//         console.log(name);
//     }
//     return displayName;
// }
// const myFunc = makeFunc();
// myFunc();
// console.dir(myFunc);


// let a = 1;
// function foo() {
//     let y = 2;

//     function bar() {
//         let z = 3;

//         function baz() {
//             let w;
//             console.log(z);
//             console.log(y);
//             console.log(a);
//             // console.log(w);
//         }
//         baz();
//         console.dir(baz)
//     }
//     bar();
// }
// foo();

// var a = 1;
// function foo() {
//     var y = 2;

//     function bar() {
//         var z = 3;

//         return function baz(w) {
//             console.log(z);
//             console.log(y);
//             console.log(a);
//             console.log(w);
//         };
//         //baz();
//         // console.dir(baz)

//     }
//     return bar();
// }
// var func = foo();
// func();

// global scope
// var e = 10;
// function sum(a) {
//     let f1 = function (b) {
//         //closue(sum){a:   }
//         let f2 = function (c) {
//             // outer functions scope
//             //closue(sum){a:   }
//             //closue(f1){b:   }

//             let f3 = function (d) {
//                 // local scope
//                 let r = a + b + c + d + e
//                 //closue(sum){a:   }
//                 //closue(f1){b:   }
//                 //closue(f2){c:   }
//                 console.log("Hello");
//                 return r;
//             };
//             return f3;
//         };
//         return f2;
//     };
//     return f1;
// }
// console.dir(sum(1)(2)(3));
// console.log(sum(1)(2)(3)(4)); // 20


// x = 1;

// function f() {
//     let y = 2;
//     const sum = function () {
//         const z = 3;
//         y = x + y + z;
//         // console.log(x + y + z);//1+10+3
//     }
//     y = 10;
//     return sum;
// } //end of f

// const g = f();
// g();
// console.dir(g);


// var funcs = [];
// for (var i = 0; i < 2; i++) {
//     funcs[i] = function () {
//         return i;
//     };
//     // console.dir(funcs[i]);
// }
// console.log(funcs[0]());
// console.log(funcs[1]());
// console.log(window);

// var funcs = [];
// for (let i = 0; i < 2; i++) {
//     funcs[i] = function () {
//         return i;
//     };
//     console.dir(funcs[i]);
// }

// console.log(funcs[0]());
// console.log(funcs[1]());


// var helper = function (n) {
//     return function () { return n; }
// }
// var funcs = [];
// for (var i = 0; i < 2; i++) {
//     funcs[i] = helper(i);
// };
// console.log(funcs[0]());
// console.log(funcs[1]());


