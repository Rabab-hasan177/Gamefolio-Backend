const router = require("express").Router()
const gameCtrl = require("../controllers/GameController")
const middleware = require('../middleware')
router.get('/', gameCtrl.get_game

)
