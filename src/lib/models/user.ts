import mongoose from "mongoose";

export interface IUser {
  password: string;
  username: string;
  level: string;
}

export const UserSchema = new mongoose.Schema<IUser>({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  level: {
    type: String, // Teacher, Student, Admin
    required: true,
  },
});

export const User =
  mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
