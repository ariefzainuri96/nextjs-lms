"use client";

import { useFormState, useFormStatus } from "react-dom";
import { addOrUpdateSchool } from "../actions";
import CustomInput from "@/components/CustomInput";
import Button from "@/components/Button";
import { useEffect, useState } from "react";
import { ValidationMessage } from "@/lib/models/validation_message";
import { ISchool } from "@/lib/models/school";

type AddOrEditSchoolModalProps = {
  modalId: string;
  data?: ISchool;
};

export const AddOrEditSchoolModal = ({
  modalId,
  data,
}: AddOrEditSchoolModalProps) => {
  const [school, setSchool] = useState(data);
  const [showError, setShowError] = useState(false);
  const [message, dispatch] = useFormState(addOrUpdateSchool, undefined);

  useEffect(() => {
    if (message) {
      setShowError(typeof message != "string");
    }

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowError(false);
        setSchool(data);
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [message, data]);

  // close modal after get success message
  if (message && message == "success" && typeof document != "undefined") {
    (document.getElementById(modalId) as HTMLFormElement).close();
  }

  return (
    <dialog id={modalId} className="modal">
      <div className="modal-box">
        <h3 className="text-lg font-bold">
          {data ? "Perbarui Sekolah" : "Tambah Sekolah"}
        </h3>
        <form action={dispatch}>
          <CustomInput
            value={school?.school_name ?? ""}
            onChange={(e) => {
              setSchool(
                (s) => ({ ...s, school_name: e.target.value }) as ISchool,
              );
            }}
            label={"Nama Sekolah"}
            name="school_name"
            className="mt-4"
            message={
              showError
                ? (message as ValidationMessage[]).find(
                    (element) => element.name == "school_name",
                  )?.message
                : undefined
            }
          />
          <CustomInput
            value={school?.school_address ?? ""}
            onChange={(e) => {
              setSchool(
                (s) => ({ ...s, school_address: e.target.value }) as ISchool,
              );
            }}
            label={"Alamat Sekolah"}
            name="school_address"
            className="mt-4"
            message={
              showError
                ? (message as ValidationMessage[]).find(
                    (element) => element.name == "school_address",
                  )?.message
                : undefined
            }
          />
          <input
            name="schoolId"
            value={data?._id ?? ""}
            hidden={true}
            readOnly
          />
          <div className="mt-4 flex flex-row gap-2">
            <button
              onClick={(e) => {
                e.preventDefault();

                setShowError(false);
                setSchool(data);

                (document.getElementById(modalId) as HTMLFormElement).close();
              }}
              type="button"
              className="btn-outlined flex-1"
            >
              Cancel
            </button>
            <ButtonTambah content={data} />
          </div>
        </form>
      </div>
    </dialog>
  );
};

function ButtonTambah({ content }: { content?: ISchool }) {
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
