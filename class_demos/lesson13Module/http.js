// import http from "http"
// const server = http.createServer();


// server.on('request', function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.write('Hello World!');
//     res.write('Another text');
//     res.end();
// });

// server.listen(3000, () => {
//     console.log('Running on port 3000');
// });




// import http from "http"

// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     const person = {
//         firstname: 'Josh',
//         lastname: 'Edward'
//     };
//     res.end(JSON.stringify(person));
// }).listen(3000, '127.0.0.1', () => {
//     console.log('Running on port 3000');
// });




// import http from 'http';
// http.createServer((req, res) => {
//     console.log(req.url, req.method, req.headers);
//     res.setHeader('Content-Type', 'text/html');
//     res.write('My First Page ');
//     res.write('Hello From Node.js');
//     res.end();
// }).listen(3000);




// import http from "http"
// import fs from "fs"

// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     var html = fs.readFileSync('./files/index.html', 'utf8');
//     var message = 'Hello from Node.js!';
//     html = html.replace('{Message}', message);
//     res.end(html);
// }).listen(1337, '127.0.0.1', () => {
//     console.log('Running on port 1337');
// });



// import http from "http"
// import fs from "fs"

// let server = http.createServer();

// server.on('request', (req, res) => {
//     fs.readFile('./imgs/dog.jpg', (err, data) => {
//         if (err) throw err;
//         res.end(data);
//     });
// });

// server.listen(8000);


// import http from "http"
// import fs from "fs"

// let server = http.createServer();

// server.on('request', (req, res) => {
//     const src = fs.createReadStream('./imgs/dog.jpg');
//     src.pipe(res);
// });

// server.listen(8000);




import http from 'http';

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end("you are in home page");
    }
    else if (url === '/messsage' && method === 'POST') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end("in message ");
    }

    else if (url === '/messsage' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end("you are in message method is get");

    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end("Page not found");
    }

});

server.listen(3000, () => console.log('Running on port 3000'));


