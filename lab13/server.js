// Question2:

const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const server = http.createServer((req, res) => {
  const { url, method } = req;

  if (method === "GET") {
    if (url === "/image") {
      const imgPath = path.join(__dirname, "image.jpg");
      fs.readFile(imgPath, (err, data) => {
        if (err) {
          res.writeHead(500);
          return res.end("Server error");
        }
        res.writeHead(200, { "Content-Type": "image/jpeg" });
        res.end(data);
      });
    } else if (url === "/pdf") {
      const pdfPath = path.join(__dirname, "document.pdf");
      fs.readFile(pdfPath, (err, data) => {
        if (err) {
          res.writeHead(500);
          return res.end("Server error");
        }
        res.writeHead(200, { "Content-Type": "application/pdf" });
        res.end(data);
      });
    } else if (url === "/about") {
      const filePath = path.join(__dirname, "about.txt");
      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(500);
          return res.end("Server error");
        }
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(data);
      });
    } else if (url === "/" || url === "/home") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Welcome to my website");
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
    }
  } else {
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("Method Not Allowed");
  }
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
