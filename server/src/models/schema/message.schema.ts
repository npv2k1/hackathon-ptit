import mongoose from "mongoose";

const messagesSchema = new mongoose.Schema({
  chatId: {
    type: String,
  },
  image: {
    type: String,
  },
  message: {
    type: String,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});
// Duplicate the ID field.
// messagesSchema.virtual("id").get(function () {
//   return this._id.toHexString();
// });

// // Ensure virtual fields are serialised.
// messagesSchema.set("toJSON", {
//   virtuals: true,
// });
export default messagesSchema;
