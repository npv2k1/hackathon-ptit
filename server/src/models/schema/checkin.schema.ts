import mongoose from "mongoose";

const checkinSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  data: {
    type: String,
  },
  tokenId: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  transactionHash: {
    type: String,
  },
});
checkinSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
checkinSchema.set("toJSON", {
  virtuals: true,
});

export default checkinSchema;
