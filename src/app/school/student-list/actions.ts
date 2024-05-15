"use server";

import { RoleLevel } from "@/lib/common_enum";
import dbConnect from "@/lib/db/mongoose";
import { IStudent, Student } from "@/lib/models/student";
import { User } from "@/lib/models/user";
import { revalidatePath } from "next/cache";
import { RedirectType, redirect } from "next/navigation";

const bcrypt = require("bcrypt");

export async function addOrUpdateStudent(_: any, formData: FormData) {
  const fullName = formData.get("fullname")?.toString();
  const username = formData.get("username")?.toString();
  const password = formData.get("password")?.toString();
  const schoolId = formData.get("schoolId")?.toString();
  const studentClass = formData.get("class")?.toString();
  const subClass = formData.get("subclass")?.toString();
  const isUpdate = formData.get("isUpdate")?.toString();
  const id = formData.get("id")?.toString();
  const lastUrl = formData.get("lastUrl")?.toString();

  console.log(
    `${fullName}, ${username}, ${password}, ${schoolId}, ${studentClass}, ${subClass}`,
  );

  try {
    await dbConnect();

    let _student;
    let _user;

    if (isUpdate) {
      _student = await Student.findByIdAndUpdate(id, {
        school_id: schoolId,
        full_name: fullName,
        username: username,
        kelas: studentClass,
        sub_kelas: subClass,
        password: password,
      });
    } else {
      _student = await Student.create({
        school_id: schoolId,
        full_name: fullName,
        username: username,
        kelas: studentClass,
        sub_kelas: subClass,
        password: password,
      });

      const hashedPassword = await bcrypt.hash(password, 10);

      _user = await User.create({
        username: username,
        password: hashedPassword,
        level: RoleLevel.Student,
      });
    }

    if (!_student || !_user) {
      return "Gagal mendaftarkan murid";
    }

    revalidatePath(lastUrl ?? "");
  } catch (error) {
    return `${error}`;
  }

  redirect(lastUrl ?? "", RedirectType.replace);
}

export async function deleteStudent(_: any, formData: FormData) {
  await dbConnect();

  const studentId = formData.get("id")?.toString();
  const lastUrl = formData.get("lastUrl")?.toString();

  console.log(`lastUrl ${lastUrl}`);

  try {
    const _student = await Student.deleteOne({
      _id: studentId,
    });

    if (!_student) {
      return "Gagal menghapus siswa";
    }

    revalidatePath(lastUrl ?? "");
  } catch (error) {
    return `${error}`;
  }

  redirect(lastUrl ?? "", RedirectType.replace);
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
