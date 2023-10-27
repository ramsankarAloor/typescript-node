import { Router } from "express"; // { } needed for named export
import { Todo } from "../models/todo";
const router = Router();

const todos : Todo[] = [];

router.get("/", (req, res, next) => {
  res.status(200).json({ todos: todos });
});

router.post('/todo', (req, res)=>{
    const newTodo : Todo = {
        id : new Date().toISOString(),
        text : req.body.text
    }
})
export default router;
