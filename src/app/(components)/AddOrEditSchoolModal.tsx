"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useFormState, useFormStatus } from "react-dom";
import { addOrUpdateSchool } from "../actions";
import CustomInput from "@/components/CustomInput";
import Button from "@/components/Button";

export const AddOrEditSchoolModal = () => {
  const searchParams = useSearchParams();
  const showDelete = searchParams.get("showaddoredit");
  const id = searchParams.get("id");
  const content = searchParams.get("content");

  const router = useRouter();

  const [message, dispatch] = useFormState(addOrUpdateSchool, undefined);

  return (
    showDelete && (
      <div className="parent-dialog">
        <div className="child-dialog">
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
            className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2"
          >
            ✕
          </button>
          <h3 className="mt-2 text-lg font-bold">
            {content ? "Perbarui Sekolah" : "Tambah Sekolah"}
          </h3>
          <form action={dispatch}>
            <CustomInput
              defaultValue={content ?? ""}
              label={"Nama Sekolah"}
              name="school_name"
              className="mt-4"
              message={message}
            />
            <input
              name="isUpdate"
              value={content == null ? undefined : content}
              hidden={true}
              readOnly
            />
            <input name="schoolId" value={id ?? ""} hidden={true} readOnly />
            <div className="mt-4 flex flex-row gap-2">
              <button
                onClick={(e) => {
                  e.preventDefault();

                  router.replace("/");
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
      </div>
    )
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
