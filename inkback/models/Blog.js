const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  imageUrl: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },

  author: {
  type:String,
  ref: "User",
  required: true,
}
});

module.exports = mongoose.model("Blog", blogSchema);
