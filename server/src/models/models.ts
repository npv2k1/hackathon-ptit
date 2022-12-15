import mongoose, { Document } from "mongoose";
import checkinSchema from "./schema/checkin.schema";

const checkinModel = mongoose.model("Checkin", checkinSchema);

export { checkinModel };
