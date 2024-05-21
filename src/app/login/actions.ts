"use server";

import { lucia } from "@/lib/auth/lucia";
import dbConnect from "@/lib/db/mongoose";
import { User } from "@/lib/models/user";
import { revalidatePath } from "next/cache";
import { isRedirectError } from "next/dist/client/components/redirect";
import { cookies } from "next/headers";
import { RedirectType, redirect } from "next/navigation";

const bcrypt = require("bcrypt");

export async function login(_: any, formData: FormData) {
  const username = formData.get("username");
  const password = formData.get("password");

  try {
    await dbConnect();

    const existingUser = await User.findOne({ username: username });

    if (!existingUser) {
      return "Data user tidak ditemukan!";
    }

    const validPassword = await bcrypt.compare(password, existingUser.password);

    if (!validPassword) {
      return "Username atau Password yang anda masukkan salah!";
    }

    const session = await lucia.createSession(existingUser._id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes,
    );
  } catch (error) {
    if (isRedirectError(error)) throw error;

    return `Gagal login: ${error}`;
  }

  revalidatePath("/", "layout");
  redirect("/", RedirectType.replace);
}
