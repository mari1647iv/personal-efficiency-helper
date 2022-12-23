import { Router } from "express";
const controller = require('../controllers/todos.controller')

const router = Router()

router.get('/', controller.getTodos);
router.post('/', controller.createPlaylist)
router.delete('/:id', controller.deletePlaylist)

module.exports = router