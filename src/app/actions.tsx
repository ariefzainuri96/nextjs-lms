"use server";

import { lucia, validateRequest } from "@/lib/auth/lucia";
import { cookies } from "next/headers";
import { RedirectType, redirect } from "next/navigation";
import { School } from "@/lib/models/school";
import { revalidatePath } from "next/cache";
import dbConnect from "@/lib/db/mongoose";

export async function logout(formData: FormData) {
  await dbConnect();

  const { session } = await validateRequest();

  if (!session) {
    redirect("/login");
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );
  return redirect("/login");
}

export async function addOrUpdateSchool(_: any, formData: FormData) {
  await dbConnect();

  const { user } = await validateRequest();

  const name = formData.get("school_name")?.toString();
  const isUpdate = formData.get("isUpdate")?.toString();
  const schoolId = formData.get("schoolId")?.toString();

  console.log(`schoolId => ${schoolId}`);

  try {
    var content;

    if (isUpdate) {
      content = await School.findByIdAndUpdate(schoolId, {
        school_name: name,
      });
    } else {
      content = await School.create({
        user_id: user?.id,
        school_name: name,
      });
    }

    if (!content) {
      return "Gagal membuat sekolah";
    }

    revalidatePath("/");
  } catch (error) {
    console.log(error);
    return `${error}`;
  }

  redirect("/");
}

export async function deleteSchool(_: any, formData: FormData) {
  await dbConnect();

  const schoolId = formData.get("id")?.toString();

  console.log(schoolId);

  try {
    const _school = await School.deleteOne({
      _id: schoolId,
    });

    if (!_school) {
      return "Gagal menghapus sekolah";
    }

    revalidatePath("/");
  } catch (error) {
    return `${error}`;
  }

  redirect("/", RedirectType.replace);
}
