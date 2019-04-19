const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ["uploader", "moderator"],
    required: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

const User = (module.exports = mongoose.model("user", userSchema));