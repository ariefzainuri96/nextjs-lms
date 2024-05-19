"use client";

import { useFormState, useFormStatus } from "react-dom";
import { IcWarning } from "./Icons";
import Button from "./Button";

type DeleteDataDialogProps = {
  modalId: string;
  deletedItemId: string;
  lastUrl?: string;
  formAction: (prevState: any, formData: FormData) => void;
};

export const DeleteDataDialog = ({
  modalId,
  deletedItemId,
  lastUrl,
  formAction,
}: DeleteDataDialogProps) => {
  const [message, dispatch] = useFormState(formAction, undefined);

  // close modal after get success message
  if (message && message == "success" && typeof document != "undefined") {
    (document.getElementById(modalId) as HTMLFormElement).close();
  }

  return (
    <dialog id={modalId} className="modal">
      <div className="modal-box">
        <IcWarning />
        <p className="mt-[20px] text-[18px] font-bold">Delete Data</p>
        <p className="mt-2 break-words text-[14px] text-[#475467]">
          Are you sure you want to delete this data? This action cannot be
          undone.
        </p>
        <form action={dispatch}>
          <input hidden={true} defaultValue={deletedItemId ?? ""} name="id" />
          <input hidden={true} defaultValue={lastUrl ?? ""} name="lastUrl" />
          <div className="mt-8 flex flex-row gap-3">
            <button
              onClick={(e) => {
                e.preventDefault();

                (document.getElementById(modalId) as HTMLFormElement).close();
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
    </dialog>
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
