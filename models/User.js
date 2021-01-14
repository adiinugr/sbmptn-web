import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  score: [{ type: Schema.Types.ObjectId, ref: "score" }],
});

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
