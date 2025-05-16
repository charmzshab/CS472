// Write an Express application to provide a calculator API.
// • There should be an API endpoint for each basic math
// operation: addition, subtraction, multiplication, division, and modulus.
// • Each endpoint will receive the input numbers and return a JSON response
// with the results as follows: { results: 0 }. Use the EchoAPI vscode extension or
// Postman to test your API endpoints.
// • The calculator router should be designed with flexibility to receive the input
// numbers as query parameters, parameters, or in the body as JSON or
// urlEncoded format, For example, all these requests will return the same
// results value { results: 5 }:
// o GET /addition/2/3
// o GET /addition/?a=2&b=3
// o POST /addition/ BODY ?a=2&b=3
// o POST /addition/ BODY {a:2,b:3}

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json()); // for JSON body
app.use(express.urlencoded({ extended: true })); // for urlencoded body

const getNumbers = (req) => {
  let a = parseFloat(req.params.a || req.query.a || req.body.a);
  let b = parseFloat(req.params.b || req.query.b || req.body.b);
  return { a, b };
};

const sendResult = (res, result) => {
  res.json({ results: result });
};

const calculatorRouter = express.Router();

// Addition
calculatorRouter.all("/addition/:a?/:b?", (req, res) => {
  const { a, b } = getNumbers(req);
  sendResult(res, a + b);
});

// Subtraction
calculatorRouter.all("/subtraction/:a?/:b?", (req, res) => {
  const { a, b } = getNumbers(req);
  sendResult(res, a - b);
});

// Multiplication
calculatorRouter.all("/multiplication/:a?/:b?", (req, res) => {
  const { a, b } = getNumbers(req);
  sendResult(res, a * b);
});

// Division
calculatorRouter.all("/division/:a?/:b?", (req, res) => {
  const { a, b } = getNumbers(req);
  if (b === 0) {
    return res.status(400).json({ error: "Division by zero" });
  }
  sendResult(res, a / b);
});

// Modulus
calculatorRouter.all("/modulus/:a?/:b?", (req, res) => {
  const { a, b } = getNumbers(req);
  sendResult(res, a % b);
});

app.use("/", calculatorRouter);

app.listen(port, () => {
  console.log(`Calculator API running at http://localhost:${port}`);
});
