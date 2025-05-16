import express from "express";
import path from "path";
//instantiation
const app = express();

app.set("port", process.env.PORT || 3017);
const PORT = app.get("port");

// Route for image
app.get("/image", (req, res) => {
  const imagePath = path.join(__dirname, "public", "image.jpg");
  res.type("image/jpeg"); // or image/png based on the actual file
  res.sendFile(imagePath);
});

// Route for PDF
app.get("/pdf", (req, res) => {
  const pdfPath = path.join(__dirname, "public", "document.pdf");
  res.type("application/pdf");
  res.sendFile(pdfPath);
});

// Route for about.txt
app.get("/about", (req, res) => {
  const txtPath = path.join(__dirname, "public", "about.txt");
  res.type("text/plain");
  res.sendFile(txtPath);
});

// Route for home and /
app.get(["/home", "/"], (req, res) => {
  res.send("Welcome to my website");
});

// Catch-all for undefined routes
app.use((req, res) => {
  res.status(404).send("Not found");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
