import express from "express";
import todosRoutes from "./routes/todos"; // this is a default export, so name can be changed and used. 

const app = express();
app.use(express.json()) // to read the req body , where the req body is of type json

app.use(todosRoutes);

app.listen(4000);
