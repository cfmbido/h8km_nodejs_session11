const express = require("express");
const router = express.Router();
const TodoController = require("../controllers/todo");

router.get("/", TodoController.getTodos);
router.post("/todo", TodoController.createTodo);
router.put("/todo/:todoId", TodoController.updateTodo);
router.delete("/todo/:todoId", TodoController.deleteTodo);

module.exports = router;
