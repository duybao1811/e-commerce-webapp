import React from 'react';
import {Input} from "@headlessui/react";
import clsx from "clsx";
import Image from "next/image";
import {SendIcon} from "@/assets/icons";

const FooterInputSend = () => {
  return (
    <div className={"relative flex items-center rounded border-[1.5px]"}>
      <Input
        className={clsx(
          "border-none bg-transparent pl-4 py-3 placeholder-text focus:outline-none placeholder:opacity-40",
        )}
        placeholder={'Enter your email'}
      />

      <span className="absolute right-4">
        <Image src={SendIcon} alt={'icon-send'} width={24} height={24} />
      </span>
    </div>
  );
};

export default FooterInputSend;