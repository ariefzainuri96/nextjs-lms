"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useFormState, useFormStatus } from "react-dom";
import CustomInput from "@/components/CustomInput";
import Button from "@/components/Button";
import { addOrUpdateStudent } from "../actions";
import { useEffect, useState } from "react";
import { IStudent } from "@/lib/models/student";

type AddOrEditStudentModalProps = {
  modalId: string;
  student?: IStudent;
};

export const AddOrEditStudentModal = ({
  modalId,
  student,
}: AddOrEditStudentModalProps) => {
  const [showSubClass, setShowSubClass] = useState(false);
  const [message, dispatch] = useFormState(addOrUpdateStudent, undefined);
  const pathname = usePathname();
  const params = useSearchParams();

  const schoolId = params.get("schoolId");

  const lastUrl = `${pathname}?schoolId=${schoolId}`;

  useEffect(() => {
    setShowSubClass(student?.sub_kelas != undefined);
  }, [student?.sub_kelas]);

  // close modal after get success message
  if (message && message == "success" && typeof document != "undefined") {
    (document.getElementById(modalId) as HTMLFormElement).close();
  }

  return (
    <dialog id={modalId} className="modal">
      <div className="modal-box">
        <h3 className="mt-2 text-lg font-bold">Tambah Murid!</h3>
        <form action={dispatch}>
          <CustomInput
            defaultValue={student?.full_name ?? ""}
            label={"Nama Lengkap"}
            name="fullname"
            className="mt-4"
          />
          <div className="mt-2 flex w-full flex-row items-center gap-2">
            <select
              defaultValue={student?.kelas ?? "Class"}
              name="class"
              className="select select-bordered w-full flex-1"
            >
              <option disabled>Class</option>
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
              defaultValue={student?.sub_kelas ?? ""}
              label={"Subclass"}
              name="subclass"
              className="mt-2"
            />
          )}
          <CustomInput
            defaultValue={student?.username ?? ""}
            readOnly={student?.username != undefined}
            disabled={student?.username != undefined}
            label={"Username"}
            name="username"
            className="mt-2"
          />
          <CustomInput
            defaultValue={student?.password ?? ""}
            message={message}
            readOnly={student?.password != undefined}
            disabled={student?.password != undefined}
            label={"Password"}
            name="password"
            className="mt-2"
          />
          <CustomInput
            hidden={true}
            label={""}
            name="schoolId"
            value={schoolId ?? ""}
            readOnly
            className="mt-2"
          />
          <CustomInput
            hidden={true}
            label={""}
            name="studentId"
            value={student?._id}
            readOnly
            className="mt-2"
          />
          <CustomInput
            hidden={true}
            label={""}
            name="lastUrl"
            value={lastUrl}
            readOnly
            className="mt-2"
          />
          <div className="mt-4 flex w-full flex-row gap-2">
            <Button
              className="flex-1"
              onClick={(e) => {
                e.preventDefault();

                (document.getElementById(modalId) as HTMLFormElement).close();
              }}
              content={"Cancel"}
              variant="outlined"
            />
            <ButtonAdd isUpdate={student?._id} />
          </div>
        </form>
      </div>
    </dialog>
  );
};

function ButtonAdd({ isUpdate }: { isUpdate?: string }) {
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
      content={isUpdate ? "Perbarui" : "Tambah"}
    />
  );
}
