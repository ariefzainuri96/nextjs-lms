import mongoose from "mongoose";

interface User {
  password: string;
  username: string;
  level: string;
}

export const UserSchema = new mongoose.Schema<User>({
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

export default mongoose.models.User || mongoose.model<User>("User", UserSchema);
