"use server";

import { lucia, validateRequest } from "@/lib/auth/lucia";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ISchool, School } from "@/lib/models/school";
import { revalidatePath, unstable_cache } from "next/cache";
import dbConnect from "@/lib/db/mongoose";
import { randomUUID } from "crypto";
import { z } from "zod";

export async function logout(_: FormData) {
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
  const name = formData.get("school_name")?.toString();
  const schoolId = formData.get("schoolId")?.toString();

  const addSchoolSchema = z.object({
    name: z.string().min(1, {
      message: "Nama sekolah tidak boleh kosong!",
    }),
  });

  const passValidation = addSchoolSchema.safeParse({
    name: name,
  });

  if (!passValidation.success) {
    const { errors: err } = passValidation.error;

    let stringErr = "";
    err.forEach((element) => {
      stringErr += `${element.message} - `;
    });

    return `${stringErr.slice(0, -2)} [??] ${randomUUID()}`;
  }

  try {
    await dbConnect();

    const { user } = await validateRequest();

    var content;

    if (schoolId) {
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
      return `Gagal membuat sekolah [??] ${randomUUID()}`;
    }

    revalidatePath("/");

    return "success";
  } catch (error) {
    console.log(`addOrUpdateSchoolError ${error}`);
    return `${error} [??] ${randomUUID()}`;
  }
}

export async function deleteSchool(_: any, formData: FormData) {
  const schoolId = formData.get("id")?.toString();

  try {
    await dbConnect();

    const _school = await School.deleteOne({
      _id: schoolId,
    });

    if (!_school) {
      return "Gagal menghapus sekolah";
    }

    revalidatePath("/");

    return "success";
  } catch (error) {
    return `${error}`;
  }
}

async function getSchool() {
  try {
    await dbConnect();
    const { user } = await validateRequest();
    const schools: ISchool[] = (
      await School.where({
        user_id: user?.id,
      })
    ).map((element) => {
      const obj: ISchool = JSON.parse(JSON.stringify(element));
      return obj;
    });

    return schools;
  } catch (error) {
    throw new Error("Gagal mendapatkan data sekolah!");
  }
}

export const getSchoolCached = unstable_cache(getSchool);
