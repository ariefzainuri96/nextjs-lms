"use client";

import Button from "@/components/Button";
import CustomInput from "@/components/CustomInput";
import { useFormState, useFormStatus } from "react-dom";
import { addSchool } from "../actions";

const AddSchoolModal = () => {
  const [message, dispatch] = useFormState(addSchool, undefined);
  const { pending } = useFormStatus();

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
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="mt-2 text-lg font-bold">Tambah Sekolah</h3>
          <form action={dispatch}>
            <CustomInput
              label={"Nama Sekolah"}
              name="school_name"
              className="mt-4"
              message={message}
            />
            <div className="flex w-full flex-row justify-end">
              <Button
                disabled={pending}
                type="submit"
                pending={pending}
                content={"Tambah"}
                className="mt-4"
              />
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default AddSchoolModal;
