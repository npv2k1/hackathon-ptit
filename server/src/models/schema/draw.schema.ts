import mongoose from "mongoose";

const drawSchema = new mongoose.Schema({
  sessionId: String,
  data: mongoose.Schema.Types.Array,
  chats: mongoose.Schema.Types.Array,
});
// Duplicate the ID field.
drawSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
drawSchema.set("toJSON", {
  virtuals: true,
});
export default drawSchema;
