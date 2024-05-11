"use client";

import { useFormState, useFormStatus } from "react-dom";
import CustomInput from "@/components/CustomInput";
import Button from "@/components/Button";
import { login } from "./actions";
import Link from "next/link";

export default function Page() {
  const [message, dispatch] = useFormState(login, undefined);
  const { pending } = useFormStatus();

  return (
    <div className="p-4">
      <form action={dispatch}>
        <CustomInput type="text" name="username" label={"Username"} />
        <CustomInput
          className="mt-2"
          label={"Password"}
          type="password"
          name="password"
        />
        <div className="mt-2 flex flex-row gap-2">
          <Button disabled={pending} type="submit" content={"Login"} />
          <Link className="btn-outlined" href={"/register"}>
            Register
          </Link>
        </div>
        {message && <p className="mt-2 text-lg font-semibold">{message}</p>}
      </form>
    </div>
  );
}
