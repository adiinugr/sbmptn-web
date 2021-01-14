import mongoose from "mongoose";
const Schema = mongoose.Schema;

const TestSchema = new Schema({
  number: {
    type: Number,
    required: [true, "Please add a number"],
  },
  title: {
    type: String,
    required: [true, "Please add a title"],
  },
  desc: {
    type: String,
    required: [true, "Please add a description"],
  },
  quizzes: [{ type: Schema.Types.ObjectId, ref: "quiz" }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.models.Test || mongoose.model("Test", TestSchema);
