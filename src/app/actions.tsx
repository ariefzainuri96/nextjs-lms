"use server";

import { lucia, validateRequest } from "@/lib/auth/lucia";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { School } from "@/lib/models/school";
import { revalidatePath } from "next/cache";
import { delay } from "@/lib/utils/common_functions";

export async function logout(formData: FormData) {
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

export async function addSchool(_: any, formData: FormData) {
  const { user } = await validateRequest();

  const name = formData.get("school_name")?.toString();

  try {
    const _school = await School.create({
      user_id: user?.id,
      school_name: name,
    });

    if (!_school) {
      return "Gagal membuat sekolah";
    }

    revalidatePath("/");
  } catch (error) {
    return `${error}`;
  }
}
