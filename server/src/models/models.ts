import mongoose, { Document } from "mongoose";
import checkinSchema from "./schema/checkin.schema";
import drawSchema from "./schema/draw.schema";
import userSchema from "./schema/user.schema";

const drawModel = mongoose.model("Draw", drawSchema);
const userModel = mongoose.model("User", userSchema);
const checkinModel = mongoose.model("Checkin", checkinSchema);

export { drawModel, userModel, checkinModel };
