const router = require('express').Router()
const commentCtrl = require('../controllers/CommentController')

router.post('/:gameId', commentCtrl.CreateComment)


module.exports = router
