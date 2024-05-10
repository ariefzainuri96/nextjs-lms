"use client";

import { useFormState, useFormStatus } from "react-dom";
import CustomInput from "@/components/CustomInput";
import Button from "@/components/Button";
import { login } from "./actions";

export default function Page() {
  const [message, dispatch] = useFormState(login, undefined);
  const { pending } = useFormStatus();

  return (
    <>
      <form action={dispatch}>
        <CustomInput type="text" name="username" label={"Username"} />
        <CustomInput
          className="mt-2"
          label={"Password"}
          type="password"
          name="password"
        />
        <Button
          className="mt-2"
          disabled={pending}
          type="submit"
          content={"Login"}
        />
        {message && <p className="mt-2 text-lg font-semibold">{message}</p>}
      </form>
    </>
  );
}
