import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";

const app = express();

dotenv.config({ path: "../.env" });

const mongo_url = process.env.MONGO
const port = process.env.PORT || 3000


mongoose
  .connect(
    mongo_url
  )
  .then(() => {
    console.log("mongodb is connected");
  })
  .catch((err) => {
    console.log(err);
  });


app.listen(3000, () => {
  console.log(`Server is running on port ${port}`);
});


app.use("/server/user", userRoutes);