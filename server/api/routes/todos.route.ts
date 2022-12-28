import { Router } from "express";
const controller = require('../controllers/todos.controller')

const router = Router()

router.get('/', controller.getTodos);
router.post('/', controller.createTodo)
router.delete('/:id', controller.deleteTodo)

module.exports = router