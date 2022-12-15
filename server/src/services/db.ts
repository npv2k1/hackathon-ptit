import mongoose from "mongoose";
const db = mongoose;
const { MONGO_HOSTNAME, MONGO_DB, MONGO_PORT } = process.env;
/* Connecting to the MongoDB database. */
db.connect(`mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
export default db;
