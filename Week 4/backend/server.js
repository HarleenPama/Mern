const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Welcome Route
app.get("/welcome", (req, res) => {
  res.json({ message: "Welcome to Express!" });
});

// In-memory Users Array
let users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" }
];

// CRUD Routes for Users
app.get("/users", (req, res) => res.json(users));

app.post("/users", (req, res) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const index = users.findIndex(user => user.id == id);
  if (index !== -1) {
    users[index] = { id: Number(id), ...req.body };
    res.json(users[index]);
  } else res.status(404).json({ error: "User not found" });
});

app.delete("/users/:id", (req, res) => {
  users = users.filter(user => user.id != req.params.id);
  res.json({ message: "User deleted" });
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
