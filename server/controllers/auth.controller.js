import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {  // we use 'next' to use the middleware
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All fields are required"));
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({ username, email, password: hashedPassword }); // if the key and the value are the same you can simply use this shorthand syntax instead of {username:username}.

  // this try/catch block will either save the new user to the database
  // or it will send an error if it is a duplicate or anyother reason
  try {
    await newUser.save();
    res.json("sigun up successful");
  } catch (error) {
    next(error);
  }
};
