"use client";

import Button from "@/components/Button";
import CustomInput from "@/components/CustomInput";
import { useFormState, useFormStatus } from "react-dom";
import { addSchool } from "../actions";
import { useState } from "react";

export const AddSchoolModal = () => {
  const [message, dispatch] = useFormState(addSchool, undefined);

  return (
    <>
      <button
        className="btn"
        onClick={(e) => {
          e.preventDefault();

          (document.getElementById("my_modal") as HTMLFormElement).showModal();
        }}
      >
        Tambah Sekolah
      </button>
      <dialog id="my_modal" className="modal">
        <div className="modal-box">
          <button
            onClick={(e) => {
              e.preventDefault();

              (document.getElementById("my_modal") as HTMLFormElement).close();
            }}
            className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2"
          >
            ✕
          </button>
          <h3 className="mt-2 text-lg font-bold">Tambah Sekolah</h3>
          <form action={dispatch}>
            <CustomInput
              label={"Nama Sekolah"}
              name="school_name"
              className="mt-4"
              message={message}
            />
            <div className="flex w-full flex-row justify-end">
              <ButtonTambah />
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

const ButtonTambah = () => {
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
