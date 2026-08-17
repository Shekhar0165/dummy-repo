const express = require("express");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("Hello, express"); //dev 1
});

// GET Route
app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "shivam" },
    { id: 2, name: "Bob" }
  ]);
});

// POST Route
app.post("/users", (req, res) => {
  const user = req.body;
  res.status(201).json({
    message: "User created successfully",
    user
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});