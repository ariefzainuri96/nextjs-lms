"use client";

import { useFormState, useFormStatus } from "react-dom";
import { signup } from "./actions";
import CustomInput from "@/components/CustomInput";
import Button from "@/components/Button";
import Link from "next/link";

export default function Page() {
  const [message, dispatch] = useFormState(signup, undefined);

  return (
    <div className="p-4">
      <form action={dispatch}>
        <CustomInput type="text" name="username" label={"Username"} />
        <CustomInput
          className="mt-2"
          label={"Password"}
          type="password"
          name="password"
          message={message}
        />
        <div className="mt-2 flex flex-row gap-2">
          <ButtonSubmit />
          <Link className="btn-outlined" href={"/login"}>
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}

const ButtonSubmit = () => {
  const { pending } = useFormStatus();
  return <Button disabled={pending} type="submit" content={"Register"} />;
};
