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
},
imageUrl: {
  type: String,
  required: false,
}

});

module.exports = mongoose.model("Blog", blogSchema);
