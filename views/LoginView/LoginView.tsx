import React from "react";
import ButtonCustom from "@/components/Button/Button";
import Link from "next/link";
import InputOutline from "@/components/Input/InputOutline";

const LoginView = () => {
  return (
    <div className={"flex-1 w-full max-w-[400px]"}>
      <h1 className={"font-medium text-4xl mb-6"}>Log in to Exclusive</h1>
      <p className={"mb-12"}>Enter your details below</p>
      <InputOutline placeholder={"Email or Phone Number"} className={"mb-10"} />
      <InputOutline placeholder={"Password"} className={"mb-10"} />
      <div className={"w-full flex items-center justify-between"}>
        <ButtonCustom>Login</ButtonCustom>
        <Link href={"/forgot-password"} className={"text-secondary2"}>
          Forgot Password?
        </Link>
      </div>
    </div>
  );
};

export default LoginView;
