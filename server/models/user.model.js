import mongoose from "mongoose";

// schema are a kind of rules/condition for our user
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String, // specifies the data type which is a string here
      required: true, // makes username required in order to continue
      unique: true, // makes username unique, so that no one else may use it
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;