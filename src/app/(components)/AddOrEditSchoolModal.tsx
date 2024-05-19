"use client";

import { useFormState, useFormStatus } from "react-dom";
import { addOrUpdateSchool } from "../actions";
import CustomInput from "@/components/CustomInput";
import Button from "@/components/Button";
import { useEffect, useState } from "react";

type AddOrEditSchoolModalProps = {
  modalId: string;
  content?: string;
  schoolId?: string;
};

export const AddOrEditSchoolModal = ({
  modalId,
  content,
  schoolId,
}: AddOrEditSchoolModalProps) => {
  const [showError, setShowError] = useState(true);
  const [message, dispatch] = useFormState(addOrUpdateSchool, undefined);

  useEffect(() => {
    if (message) {
      setShowError(message != "success");
    }

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowError(false);
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [message]);

  // close modal after get success message
  if (message && message == "success" && typeof document != "undefined") {
    (document.getElementById(modalId) as HTMLFormElement).close();
  }

  return (
    <dialog id={modalId} className="modal">
      <div className="modal-box">
        <h3 className="text-lg font-bold">
          {content ? "Perbarui Sekolah" : "Tambah Sekolah"}
        </h3>
        <form action={dispatch}>
          <CustomInput
            defaultValue={content ?? ""}
            label={"Nama Sekolah"}
            name="school_name"
            className="mt-4"
            message={showError ? message?.split(" [??] ")[0] : undefined}
          />
          <input
            name="schoolId"
            value={schoolId ?? ""}
            hidden={true}
            readOnly
          />
          <div className="mt-4 flex flex-row gap-2">
            <button
              onClick={(e) => {
                e.preventDefault();

                setShowError(false);
                (document.getElementById(modalId) as HTMLFormElement).close();
              }}
              type="button"
              className="btn-outlined flex-1"
            >
              Cancel
            </button>
            <ButtonTambah content={content == null ? undefined : content} />
          </div>
        </form>
      </div>
    </dialog>
  );
};

function ButtonTambah({ content }: { content?: string }) {
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
