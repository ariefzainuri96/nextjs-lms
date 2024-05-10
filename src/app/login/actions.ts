"use server";

import { lucia } from "@/lib/auth/lucia";
import dbConnect from "@/lib/db/mongoose";
import user from "@/lib/models/user";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const bcrypt = require("bcrypt");

export async function login(_: any, formData: FormData) {
  const username = formData.get("username");
  const password = formData.get("password");

  // you can use zod or any other library to validate the formData

  await dbConnect();
  const existingUser = await user.findOne({ username: username });

  if (!existingUser) {
    return "Data user tidak ditemukan";
  }

  const validPassword = await bcrypt.compare(password, existingUser.password);

  if (!validPassword) {
    return "Password yan anda masukkan salah";
  }

  const session = await lucia.createSession(existingUser._id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );
  return redirect("/");
}
