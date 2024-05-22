"use server";

import { lucia, validateRequest } from "@/lib/auth/lucia";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ISchool, School } from "@/lib/models/school";
import { revalidatePath, unstable_cache } from "next/cache";
import dbConnect from "@/lib/db/mongoose";
import { randomUUID } from "crypto";
import { z } from "zod";
import { ValidationMessage } from "@/lib/models/validation_message";

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
  const address = formData.get("school_address")?.toString();
  const schoolId = formData.get("schoolId")?.toString();

  const addSchoolSchema = z.object({
    school_name: z.string().min(1, {
      message: "Nama sekolah tidak boleh kosong!",
    }),
    school_address: z.string().min(1, {
      message: "Alamat sekolah tidak boleh kosong!",
    }),
  });

  const passValidation = addSchoolSchema.safeParse({
    school_name: name,
    school_address: address,
  });

  if (!passValidation.success) {
    const { errors: err } = passValidation.error;

    const fullError: ValidationMessage[] = err.map((element) => {
      return {
        message: element.message,
        name: `${element.path[0]}`,
      };
    });

    return fullError;
  }

  try {
    await dbConnect();

    const { user } = await validateRequest();

    var content;

    if (schoolId) {
      content = await School.findByIdAndUpdate(schoolId, {
        school_name: name,
        school_address: address,
      });
    } else {
      content = await School.create({
        user_id: user?.id,
        school_name: name,
        school_address: address,
      });
    }

    if (!content) {
      return [
        {
          message: `Gagal membuat sekolah [??] ${randomUUID()}`,
          name: "school_address",
        } as ValidationMessage,
      ];
    }

    revalidatePath("/");

    return "success";
  } catch (error) {
    return [
      {
        message: `${error} [??] ${randomUUID()}`,
        name: "school_address",
      } as ValidationMessage,
    ];
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
