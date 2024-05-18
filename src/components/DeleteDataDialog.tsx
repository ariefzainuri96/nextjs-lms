"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useFormState, useFormStatus } from "react-dom";
import { IcWarning } from "./Icons";
import Button from "./Button";

type DeleteDataDialogProps = {
  lastUrl: string;
  formAction: (prevState: any, formData: FormData) => void;
};

export const DeleteDataDialog = ({
  formAction,
  lastUrl,
}: DeleteDataDialogProps) => {
  const searchParams = useSearchParams();
  const showDelete = searchParams.get("showdelete");
  const id = searchParams.get("id");

  const [message, dispatch] = useFormState(formAction, undefined);

  const router = useRouter();

  return (
    showDelete && (
      <div className="parent-dialog">
        <div className="mx-[10vw] flex w-full max-w-[400px] flex-col rounded-lg bg-white p-6">
          <IcWarning />
          <p className="mt-[20px] text-[18px] font-bold">Delete Data</p>
          <p className="mt-2 break-words text-[14px] text-[#475467]">
            Are you sure you want to delete this data? This action cannot be
            undone.
          </p>
          <form action={dispatch}>
            <input hidden={true} defaultValue={id ?? ""} name="id" />
            <input hidden={true} defaultValue={lastUrl ?? ""} name="lastUrl" />
            <div className="mt-8 flex flex-row gap-3">
              <button
                onClick={(e) => {
                  e.preventDefault();

                  router.replace(lastUrl);
                }}
                type="button"
                className="btn-outlined flex-1"
              >
                Cancel
              </button>
              <DeleteForm />
            </div>
          </form>
        </div>
      </div>
    )
  );
};

function DeleteForm() {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
      pending={pending}
      type="submit"
      className={
        "btn-filled-primary flex-1 " +
        (pending && "bg-slate-400 hover:bg-slate-400")
      }
      content={"Delete"}
    />
  );
}
