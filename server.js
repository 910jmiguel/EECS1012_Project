const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

let todoList = [];

app.post("/api/todo", (req, res) => {
    const task = req.body.task;
    if (task) {
        todoList.push({ task, completed: false });
        res.status(201).json({ message: "Task added", todoList });
    } else {
        res.status(400).json({ message: "Task is required" });
    }
});

app.get("/api/todo", (req, res) => {
    res.json(todoList);
});

app.delete("/api/todo/:index", (req, res) => {
    const index = req.params.index;
    if (index >= 0 && index < todoList.length) {
        todoList.splice(index, 1);
        res.json({ message: "Task deleted", todoList });
    } else {
        res.status(404).json({ message: "Task not found" });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});