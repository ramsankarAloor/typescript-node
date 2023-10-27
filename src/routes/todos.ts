import { Router } from "express"; // { } needed for named export
import { Todo } from "../models/todo";
const router = Router();

let todos: Todo[] = [];
type RequestBody = { text : string }

router.get("/", (req, res, next) => {
  try {
    res.status(200).json({ todos: todos });
  } catch (error) {
    res.status(500).json({ error: "error in get request" });
  }
});

router.post("/todo", (req, res) => {
  try {
    const reqBody = req.body as RequestBody
    const newTodo: Todo = {
      id: new Date().toISOString(),
      text: reqBody.text,
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: "error in post new todo" });
  }
});

router.put("/todo/:todoId", (req, res) => {
  try {
    const reqBody = req.body as RequestBody
    const id = req.params.todoId;
    const todoIndex = todos.findIndex((todoItem) => todoItem.id === id);
    if (!todoIndex) {
      return res.status(404).json({ message: "Item not found" });
    }
    todos[todoIndex] = { id: id, text: reqBody.text };
    res.status(200).json(todos[todoIndex]);
  } catch (error) {
    res.status(500).json({ error: "error in edit todo" });
  }
});

router.delete("/todo/:todoId", (req, res) => {
  try {
    const id = req.params.todoId;
    const todoIndex = todos.findIndex((todoItem) => todoItem.id === id);
    if (!todoIndex) {
      return res.status(404).json({ message: "Item not found" });
    }
    todos = todos.filter((todoItem) => todoItem.id !== id);
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error: "error in delete" });
  }
});

export default router;
