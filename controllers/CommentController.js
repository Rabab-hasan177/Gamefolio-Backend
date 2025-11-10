const Game = require("../models/Game")

exports.get_game = async (req, res) => {
  try {
    const games = await Game.find({}).populate('comments')
    res.status(200).send(games)
  } catch (error) {
    res.status(500).send({ msg: "Error fetching games!", error })
  }
}

