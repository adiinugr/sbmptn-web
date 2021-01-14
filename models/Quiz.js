import mongoose from "mongoose";
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
  number: {
    type: Number,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: Array,
    required: true,
  },
  correctAnswer: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.models.Quiz || mongoose.model("Quiz", QuizSchema);
