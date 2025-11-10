const router = require("express").Router()
const gameCtrl = require("../controllers/GameController")
const middleware = require("../middleware")
const upload = require("../middleware/upload")

router.get("/", gameCtrl.get_game)

router.post(
  "/createGame",
  middleware.stripToken,
  middleware.verifyToken,
  upload.single("image"),
  gameCtrl.create_game
)

router.put(
  "/:id",
  middleware.stripToken,
  middleware.verifyToken,
  upload.single("image"),
  gameCtrl.update_game
)

router.delete(
  "/:gameId",
  middleware.stripToken,
  middleware.verifyToken,
  gameCtrl.delete_game
)

module.exports = router
