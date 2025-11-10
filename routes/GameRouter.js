const router = require("express").Router()
const gameCtrl = require("../controllers/GameController")
// const middleware = require('../middleware')
const upload = require("../middleware/upload")

router.get('/', gameCtrl.get_game
)

router.post("/createGame", upload.single("image"), gameCtrl.create_game)

router.delete('/:gameId', gameCtrl.delete_game)

module.exports = router
