import React from "react";
import ButtonCustom from "@/components/Button/Button";
import Image from "next/image";
import { GoogleIcon } from "@/assets/icons";
import Link from "next/link";
import InputOutline from "@/components/Input/InputOutline";

const Signup = () => {
  return (
    <div className={"flex-1 w-full max-w-[400px]"}>
      <h1 className={"font-medium text-4xl mb-6"}>Create an account</h1>
      <p className={"mb-12"}>Enter your details below</p>
      <InputOutline placeholder={"Name"} className={"mb-10"} />
      <InputOutline placeholder={"Email or Phone Number"} className={"mb-10"} />
      <InputOutline placeholder={"Password"} className={"mb-10"} />
      <div className={"w-full"}>
        <ButtonCustom className={"mb-4 w-full"}>Create Account</ButtonCustom>
        <ButtonCustom
          variant={"outline"}
          className={"mb-8 flex items-center justify-center gap-4 w-full"}
        >
          <Image src={GoogleIcon} alt={"icon google"} width={24} height={24} />
          Sign up with Google
        </ButtonCustom>
        <p className={"text-center opacity-70"}>
          Already have an account?{" "}
          <Link href={"/login"} className={"font-medium border-b ml-1"}>
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
