import url, { URL } from 'url';


const myUrl = new URL('https://example.com/path?name=John&age=30#section');

// Access URL components
console.log(myUrl.protocol); // Output: 'https:'
console.log(myUrl.host);     // Output: 'example.com'
console.log(myUrl.pathname); // Output: '/path'
console.log(myUrl.search);   // Output: '?name=John&age=30'
console.log(myUrl.hash);     // Output: '#section'

// Add a query parameter
myUrl.searchParams.append('city', 'New York');

console.log(myUrl.searchParams);
console.log(myUrl.href); // Output: 'https://example.com/path?name=John&age=30&city=New+York#section'



// const adr = 'http://localhost:8080/default.htm?year=2017&month=february';
// const q = url.parse(adr, true);
// console.log(q.host);    //returns 'localhost: 8080
// console.log(q.pathname);    //returns ' /default.htm
// console.log(q.search);  //returns ' ? year = 2017 & month=february’
// let qdata = q.query;    //returns an object: { year: 2017, month: 'february' }
// console.log(qdata.month);   //returns 'february'
