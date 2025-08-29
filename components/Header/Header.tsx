import React from "react";
import Link from "next/link";
import Logo from "@/assets/images/logo.svg";
import Image from "next/image";
import InputCustom from "@/components/Input/Input";
import { SearchIcon } from "@/assets/icons";

const Header = () => {
  return (
    <header
      className={
        "flex items-center justify-between px-32 pb-4 pt-9 border-b-[0.5px] border-button/30"
      }
    >
      <Link href={"/"}>
        <Image className={"w-[118px] h-[24px]"} src={Logo} alt={"logo"} />
      </Link>
      <div className={"flex items-center justify-between gap-12"}>
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Contact</Link>
        <Link href={"/"}>About</Link>
        <Link href={"/"}>Sign Up</Link>
      </div>

      <InputCustom
        placeholder={"What are you looking for?"}
        rightIcon={<Image src={SearchIcon} alt={"search icon"} width={16} height={16} />}
      />
    </header>
  );
};

export default Header;
