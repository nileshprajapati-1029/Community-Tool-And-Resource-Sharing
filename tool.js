// server.js
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

let tools = [];
let currentId = 1;

// Get all tools
app.get("/tools", (req, res) => {
  res.json(tools);
});

// Add new tool
app.post("/tools", (req, res) => {
  const { name, condition } = req.body;
  const newTool = { id: currentId++, name, condition, available: true };
  tools.push(newTool);
  res.status(201).json(newTool);
});

// Toggle availability
app.put("/tools/:id/toggle", (req, res) => {
  const id = parseInt(req.params.id);
  const tool = tools.find(t => t.id === id);
  if (tool) {
    tool.available = !tool.available;
    res.json(tool);
  } else {
    res.status(404).json({ message: "Tool not found" });
  }
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));