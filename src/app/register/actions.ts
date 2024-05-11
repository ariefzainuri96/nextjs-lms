"use server";

import { lucia } from "@/lib/auth/lucia";
import { RoleLevel } from "@/lib/common_enum";
import dbConnect from "@/lib/db/mongoose";
import user from "@/lib/models/user";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const bcrypt = require("bcrypt");

export async function signup(_: any, formData: FormData) {
  const username = formData.get("username");
  const password = formData.get("password");

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await dbConnect();
    const _user = await user.create({
      username: username,
      password: hashedPassword,
      level: RoleLevel.Teacher,
    });

    if (!_user) {
      return "Gagal membuat user";
    }

    const session = await lucia.createSession(_user._id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes,
    );
  } catch (e) {
    return `${e}`;
  }

  return redirect("/");
}
