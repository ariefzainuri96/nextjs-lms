"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useFormState, useFormStatus } from "react-dom";
import CustomInput from "@/components/CustomInput";
import Button from "@/components/Button";
import { addOrUpdateStudent } from "../actions";
import { useState } from "react";

export const AddOrEditStudentModal = () => {
  const [showSubClass, setShowSubClass] = useState(false);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const lastUrl = `${pathname}?schoolId=${searchParams.get("schoolId")}`;

  const showAddOrEdit = searchParams.get("show-add-or-edit-student");
  const name = searchParams.get("name");
  const kelas = searchParams.get("class");
  const subKelas = searchParams.get("subclass");
  const username = searchParams.get("username");
  const password = searchParams.get("password");
  const studentId = searchParams.get("studentId");
  const schoolId = searchParams.get("schoolId");

  const router = useRouter();

  const [message, dispatch] = useFormState(addOrUpdateStudent, undefined);

  return (
    showAddOrEdit && (
      <div className="parent-dialog">
        <div className="child-dialog">
          <h3 className="mt-2 text-lg font-bold">Tambah Murid!</h3>
          <form action={dispatch}>
            <CustomInput
              defaultValue={name ?? ""}
              label={"Nama Lengkap"}
              name="fullname"
              className="mt-4"
            />
            <div className="mt-2 flex w-full flex-row items-center gap-2">
              <select
                defaultValue={kelas === null ? undefined : kelas}
                name="class"
                className="select select-bordered w-full flex-1"
              >
                <option disabled selected>
                  Class
                </option>
                {[1, 2, 3, 4, 5, 6].map((element) => {
                  return <option key={element}>{element}</option>;
                })}
              </select>
              <div className="h-10 w-[1px] bg-slate-200" />
              <p className="text-lg font-semibold">Subclass</p>
              <input
                type="checkbox"
                checked={showSubClass}
                onChange={(e) => {
                  setShowSubClass(Boolean(e.target.checked));
                }}
                className="checkbox"
              />
            </div>
            {showSubClass && (
              <CustomInput
                defaultValue={subKelas ?? ""}
                label={"Subclass"}
                name="subclass"
                className="mt-2"
              />
            )}
            <CustomInput
              defaultValue={username ?? ""}
              label={"Username"}
              name="username"
              className="mt-2"
              disabled={studentId !== null}
            />
            <CustomInput
              defaultValue={password ?? ""}
              message={message}
              label={"Password"}
              name="password"
              className="mt-2"
              disabled={studentId !== null}
            />
            <CustomInput
              hidden={true}
              label={""}
              name="schoolId"
              value={schoolId ?? ""}
              className="mt-2"
            />
            <CustomInput
              hidden={true}
              label={""}
              name="isUpdate"
              value={name !== null ? "isUpdate" : ""}
              className="mt-2"
            />
            <CustomInput
              hidden={true}
              label={""}
              name="lastUrl"
              value={lastUrl}
              className="mt-2"
            />
            <div className="mt-4 flex w-full flex-row gap-2">
              <Button
                className="flex-1"
                onClick={(e) => {
                  e.preventDefault();

                  router.back();
                }}
                content={"Cancel"}
                variant="outlined"
              />
              <ButtonAdd />
            </div>
          </form>
        </div>
      </div>
    )
  );
};

function ButtonAdd({ content }: { content?: string }) {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
      type="submit"
      pending={pending}
      className={
        "btn-filled-primary flex-1 " +
        (pending ? "bg-slate-400 hover:bg-slate-400" : "")
      }
      content={content ? "Perbarui" : "Tambah"}
    />
  );
}
