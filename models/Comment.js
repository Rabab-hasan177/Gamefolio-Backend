const { Schema } = require("mongoose")
const mongoose = require("mongoose")

const commentSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  gameId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Game",
  },
  description: {
    type: String,
    required: true,
  },
},
{
  timestamps: true
}
)



const Comment = mongoose.model("Comment", commentSchema)
module.exports = Comment
