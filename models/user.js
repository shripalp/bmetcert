import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    required: [true, "Email is required!"],
  },
  firstname: {
    type: String,
    required: [true, "Username is required!"],
  },

  lastname: {
    type: String,
    required: [true, "Username is required!"],
  },
});

const User = models.User || model("User", UserSchema);

export default User;
