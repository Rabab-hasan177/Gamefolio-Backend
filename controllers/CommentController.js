const Comment = require("../models/Comment")
const Game = require("../models/Game")


const CreateComment = async (req, res) => {
  try {
    const { gameId } = req.params
    const comment = await Comment.create({ ...req.body, gameId: gameId })

    await Game.findByIdAndUpdate(
      gameId,
      { $push: { comments: comment._id } },
      { new: true }
    )
    res.status(200).send(comment)
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateComment,

}
