const { Schema } = require("mongoose")
const mongoose = require("mongoose")

const gameSchema = new Schema(
  {
      name: {
      type: String,
      required: true,
  },
  description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      // required: true,
    },
    owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],

},
{
  timestamps: true
})

const Game = mongoose.model("Game", gameSchema)
module.exports = Game
