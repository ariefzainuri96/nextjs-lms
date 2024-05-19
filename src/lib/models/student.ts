import mongoose from "mongoose";

export interface IStudent {
  _id: string;
  school_id?: string;
  full_name?: string;
  kelas?: string;
  sub_kelas?: string;
  username?: string;
  password?: string;
  created_at?: Date;
  updated_at?: Date;
}

export const StudentSchema = new mongoose.Schema<IStudent>({
  school_id: {
    type: String,
    required: true,
  },
  full_name: {
    type: String,
    required: [true, "Nama Murid wajib diisi!"],
  },
  kelas: {
    type: String,
    required: [true, "Kelas wajib diisi!"],
  },
  sub_kelas: {
    type: String,
  },
  username: {
    type: String,
    required: [true, "Username wajib diisi!"],
  },
  password: {
    type: String,
    required: [true, "Password wajib diisi!"],
  },
  created_at: {
    type: Date,
    default: new Date(),
  },
  updated_at: {
    type: Date,
    default: new Date(),
  },
});

export const Student =
  mongoose.models.Student || mongoose.model<IStudent>("Student", StudentSchema);
