const router = require("express").Router()
const commentCtrl = require("../controllers/CommentController")
const middleware = require("../middleware")

router.post(
  "/:gameId",
  middleware.stripToken,
  middleware.verifyToken,
  commentCtrl.CreateComment
)
router.delete(
  "/:commentId",
  middleware.stripToken,
  middleware.verifyToken,
  commentCtrl.DeleteComment
)

module.exports = router
