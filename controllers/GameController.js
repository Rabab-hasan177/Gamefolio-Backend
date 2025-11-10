const Game = require("../models/Game")

exports.get_game = async (req, res) => {
  try {
    const games = await Game.find({}).populate("Comment")
    res.status(200).send(games)
  } catch (error) {
    res.status(500).send({ msg: "Error fetching games!", error })
  }
}
exports.GetGameById = async (req, res) => {
  try {
    const game = await Game.findById(req.params.id).populate("owner")
    if (!game) {
      return res.status(404).send("Game not found")
    }
    res.status(200).send(game)
  } catch (error) {
    console.error("Error fetching game by ID:", error)
    res.status(500).send("Error fetching game")
  }
}
exports.create_game = async (req, res) => {
  try {
    let image = req.file ? `uploads/${req.file.filename}` : ""
    let newGame = await Game.create({ ...req.body, image: image })
    res.json(newGame)
  } catch (error) {
    res.status(500).send({ msg: "Error creating new game!", error })
  }
}
exports.update_game = async (req, res) => {
  try {
    let updateData = { ...req.body }

    if (req.file) {
      updateData.image = `uploads/${req.file.filename}`
    }

    const updatedGame = await Game.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    if (!updatedGame) {
      return res.status(404).send("Game not found for update")
    }

    res.status(200).send(updatedGame)
  } catch (error) {
    console.error("Error updating game:", error)
    res.status(500).send("Error updating game")
  }
}

exports.delete_game = async (req, res) => {
  try {
    await Game.deleteOne({ _id: req.params.gameId })
    res.status(200).send({ msg: "Game Deleted", id: req.params.gameId })
  } catch (error) {
    throw error
  }
}
