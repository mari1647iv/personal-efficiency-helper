import { Router } from "express";
const controller = require('../controllers/playlists.controller')

const router = Router()

router.get('/', controller.getPlaylists);
router.post('/', controller.createPlaylist)
router.delete('/:id', controller.deletePlaylist)

module.exports = router