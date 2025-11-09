const { Schema } = require("mongoose")
const mongoose = require("mongoose")


const Comment = mongoose.model("Comment", commentSchema)
module.exports = Comment
