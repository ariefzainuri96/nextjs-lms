"use client";

import Button from "@/components/Button";
import CustomInput from "@/components/CustomInput";
import { useFormState, useFormStatus } from "react-dom";
import { addStudent } from "../actions";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const AddStudentModal = () => {
  const [isHasSubclass, setIsHasSubclass] = useState(false);

  const [message, dispatch] = useFormState(addStudent, undefined);

  const pathname = usePathname();

  return (
    <>
      <button
        className="btn"
        onClick={(e) => {
          e.preventDefault();

          (
            document.getElementById("my_modal_2") as HTMLFormElement
          ).showModal();
        }}
      >
        Tambah Murid
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="mt-2 text-lg font-bold">Tambah Murid!</h3>
          <form action={dispatch}>
            <CustomInput
              label={"Nama Lengkap"}
              name="fullname"
              className="mt-4"
            />
            <div className="mt-2 flex w-full flex-row items-center gap-2">
              <select
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
                onChange={(e) => {
                  setIsHasSubclass(Boolean(e.target.checked));
                }}
                className="checkbox"
              />
            </div>
            {isHasSubclass && (
              <CustomInput
                label={"Subclass"}
                name="subclass"
                className="mt-2"
              />
            )}
            <CustomInput label={"Username"} name="username" className="mt-2" />
            <CustomInput
              message={message}
              label={"Password"}
              name="password"
              className="mt-2"
            />
            <CustomInput
              hidden={true}
              label={""}
              name="school_id"
              value={pathname.split("/").slice(-2)[0]}
              className="mt-2"
            />
            <div className="flex w-full flex-row justify-end">
              <ButtonAdd />
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

const ButtonAdd = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
      type="submit"
      pending={pending}
      content={"Tambah"}
      className="mt-4"
    />
  );
};
