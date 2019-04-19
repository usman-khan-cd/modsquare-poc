const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const itemSchema = mongoose.Schema({
  image: String,
  video: String,
  text: String,
  iframe: String,
  status: {
    type: String,
    enum: ["pending", "accepted", "rejected"],
    required: true
  },
  type: {
    type: String,
    enum: ["image", "video", "content", "iframe"],
    required: true
  },
  create_date: {
    type: Date,
    default: Date.now
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" }
});
itemSchema.plugin(mongoosePaginate);

const Item = (module.exports = mongoose.model("item", itemSchema));
