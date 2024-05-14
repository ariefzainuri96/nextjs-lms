"use server";

import { RoleLevel } from "@/lib/common_enum";
import dbConnect from "@/lib/db/mongoose";
import { IStudent, Student } from "@/lib/models/student";
import { User } from "@/lib/models/user";
import { revalidatePath } from "next/cache";

const bcrypt = require("bcrypt");

export async function addStudent(_: any, formData: FormData) {
  const fullName = formData.get("fullname")?.toString();
  const username = formData.get("username")?.toString();
  const password = formData.get("password")?.toString();
  const schoolId = formData.get("school_id")?.toString();
  const studentClass = formData.get("class")?.toString();
  const subClass = formData.get("subclass")?.toString();

  console.log(
    `${fullName}, ${username}, ${password}, ${schoolId}, ${studentClass}, ${subClass}`,
  );

  try {
    await dbConnect();
    const _student = await Student.create({
      school_id: schoolId,
      full_name: fullName,
      username: username,
      kelas: studentClass,
      sub_kelas: subClass,
      password: password,
    });

    const hashedPassword = await bcrypt.hash(password, 10);

    const _user = await User.create({
      username: username,
      password: hashedPassword,
      level: RoleLevel.Student,
    });

    if (!_student || !_user) {
      return "Gagal mendaftarkan murid";
    }

    revalidatePath("/student-list");
  } catch (error) {
    return `${error}`;
  }
}

export async function getStudents(schoolId: string) {
  try {
    await dbConnect();

    const students = await Student.where({
      school_id: schoolId,
    });

    return students.map((element) => {
      const obj: IStudent = JSON.parse(JSON.stringify(element));
      return obj;
    });
  } catch (error) {
    console.log(error);
    return [];
  }
}
