import React from "react";
import AuthBackgroundImage from "@/assets/images/auth-bg.png";
import Image from "next/image";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={"pt-[60px] pr-[135px] pb-[140px] flex items-center gap-[130px]"}>
      <div>
        <Image
          src={AuthBackgroundImage}
          width={805}
          height={781}
          className={"h-full"}
          alt={"auth background image"}
        />
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
