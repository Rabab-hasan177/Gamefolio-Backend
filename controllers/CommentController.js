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
const DeleteComment = async (req, res) => {
  try {
    await Comment.deleteOne({ _id: req.params.id })
    res.status(200).send({ msg: "comment Deleted", id: req.params.id })
  } catch (error) {
    throw error
  }
}
module.exports = {
  CreateComment,
  DeleteComment,

}
