"use client";

import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import { useUserRegistration } from "@/src/hooks/auth.hook";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { FieldValues, SubmitHandler } from "react-hook-form";

const Register = () => {
  const { mutate: handleUserRegistration, isPending } = useUserRegistration();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const userData = {
      ...data,
      profilePhoto:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    };

    handleUserRegistration(userData);
  };

  return (
    <div className="flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center">
      <h3 className="my-2 text-2xl font-bold">Register with FoundX</h3>
      <p className="mb-4">Welcome Back! Let&lsquo;s Get Started</p>
      <div className="w-[35%]">
        <FXForm
          // resolver={zodResolver(loginValidationSchema)}
          onSubmit={onSubmit}
        >
          <div className="py-3">
            <FXInput label="Name" name="name" type="text" />
          </div>
          <div className="py-3">
            <FXInput label="Email" name="email" type="email" />
          </div>
          <div className="py-3">
            <FXInput label="Mobile" name="mobileNumber" type="text" />
          </div>
          <div className="py-3">
            <FXInput label="Password" name="password" type="password" />
          </div>
          <Button
            className="my-3 w-full rounded-md bg-default-900 font-semibold text-default"
            // disabled={isPending}
            size="lg"
            type="submit"
          >
            Register
          </Button>
        </FXForm>
        <div className="text-center">
          have account ? <Link href={"/login"}>login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
