const router = require('express').Router()
const commentCtrl = require('../controllers/CommentController')

router.post('/:gameId', commentCtrl.CreateComment)
router.delete('/:commentId', commentCtrl.DeleteComment)

module.exports = router
