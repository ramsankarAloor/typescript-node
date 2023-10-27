"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_1 = __importDefault(require("./routes/todos")); // this is a default export, so name can be changed and used. 
const app = (0, express_1.default)();
app.use(express_1.default.json()); // to read the req body , where the req body is of type json
app.use(todos_1.default);
app.listen(4000);
