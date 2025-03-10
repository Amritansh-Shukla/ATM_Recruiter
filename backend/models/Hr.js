const mongoose = require("mongoose");

const hrSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "hr",
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const HR = mongoose.model("HR", hrSchema);
module.exports = HR;
