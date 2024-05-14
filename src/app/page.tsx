import { validateRequest } from "@/lib/auth/lucia";
import dbConnect from "@/lib/db/mongoose";
import { redirect } from "next/navigation";
import { deleteSchool, logout } from "./actions";
import { Suspense } from "react";
import SchoolList from "./(components)/SchoolList";
import { IUser, User } from "@/lib/models/user";
import { RoleLevel } from "@/lib/common_enum";
import DeleteDataDialog from "@/components/DeleteDataDialog";
import { AddOrEditSchool } from "./(components)/AddOrEditSchool";
import { AddOrEditSchoolModal } from "./(components)/AddOrEditSchoolModal";

export default async function Home() {
  await dbConnect();

  const { user } = await validateRequest();

  if (!user) {
    redirect("/register");
  }

  const profile: IUser | null = await User.findOne({
    username: user.username,
  });

  if (profile && profile.level !== RoleLevel.Teacher) {
    redirect("/dashboard-student");
  }

  return (
    <div className="mx-4 flex flex-col items-start">
      <div className="mt-2 flex flex-row gap-2 overflow-y-auto">
        <AddOrEditSchool />
        <form action={logout}>
          <button className="btn-outlined" type="submit">
            Logout
          </button>
        </form>
      </div>
      <p className="mt-2">Daftar Sekolah</p>
      <Suspense fallback={"Loading..."}>
        <SchoolList />
      </Suspense>
      <DeleteDataDialog formAction={deleteSchool} />
      <AddOrEditSchoolModal />
    </div>
  );
}
