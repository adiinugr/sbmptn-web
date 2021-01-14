import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  testTitle: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  quiz: [{ type: Schema.Types.ObjectId, ref: "quiz" }],
});

module.exports = mongoose.models.User || mongoose.model("Score", UserSchema);
