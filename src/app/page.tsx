import { lucia, validateRequest } from "@/lib/auth/lucia";
import dbConnect from "@/lib/db/mongoose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  await dbConnect();

  const { user } = await validateRequest();

  if (!user) {
    redirect("/register");
  }

  async function logout(formData: FormData) {
    "use server";

    const { session } = await validateRequest();
    if (!session) {
      return {
        error: "Unauthorized",
      };
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

  return (
    <div className="flex flex-col items-start">
      <p>Dashboard</p>
      <form action={logout}>
        <button className="btn-outlined" type="submit">
          Logout
        </button>
      </form>
    </div>
  );
}
