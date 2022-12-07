import mongoose from "mongoose";
import config from "../config";

mongoose.set("strictQuery", true);
mongoose
  .connect(config.mongo)
  .then(() => console.log("Connected to mongo"))
  .catch((err) => console.log(err));
