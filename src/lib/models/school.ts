import mongoose from "mongoose";

export interface ISchool {
  _id: string;
  user_id?: string;
  school_name?: string;
  school_address?: string;
  created_at?: Date;
  updated_at?: Date;
}

export const SchoolSchema = new mongoose.Schema<ISchool>({
  user_id: {
    type: String,
    required: true,
  },
  school_name: {
    type: String,
    required: [true, "Nama sekolah wajib diisi!"],
  },
  school_address: {
    type: String,
    required: [true, "Alamat sekolah wajib diisi!"],
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

export const School =
  mongoose.models.School || mongoose.model<ISchool>("School", SchoolSchema);
