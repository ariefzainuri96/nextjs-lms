"use client";

import { useFormState, useFormStatus } from "react-dom";
import { signup } from "./actions";
import CustomInput from "@/components/CustomInput";
import Button from "@/components/Button";

export default function Page() {
  const [message, dispatch] = useFormState(signup, undefined);
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
          content={"Register"}
        />
      </form>
    </>
  );
}
