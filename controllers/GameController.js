const Game = require("../models/Game")

exports.get_game = async (req, res) => {
  try {
    const games = await Game.find({}).populate('comments')
    res.status(200).send(games)
  } catch (error) {
    res.status(500).send({ msg: "Error fetching games!", error })
  }
}

exports.create_game = async (req, res) => {
  try {
    let image = req.file ? `uploads/${req.file.filename}` : ""
    let newGame = await Game.create({...req.body, image:image})
    res.json(newGame)
  } catch (error) {
    res.status(500).send({ msg: "Error creating new post!", error })
  }
}
