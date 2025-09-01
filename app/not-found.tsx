"use client";

import React from "react";
import { Breadcrumb } from "@/components/Breadcrumb/Breadcrumb";
import ButtonCustom from "@/components/Button/Button";
import { useRouter } from "next/navigation";
const NotFound = () => {
  const router = useRouter();

  return (
    <div className={"px-20 py-[135px]"}>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "404 Error" }]} />
      <div className={"flex flex-col items-center justify-center mt-[140px]"}>
        <h1 className={"font-medium text-8xl text-center mb-10"}>404 Not Found</h1>
        <p className={"mb-20"}>Your visited page not found. You may go home page.</p>
        <ButtonCustom onClick={() => router.replace("/")}>Back to home page</ButtonCustom>
      </div>
    </div>
  );
};

export default NotFound;
