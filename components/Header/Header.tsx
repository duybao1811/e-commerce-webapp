"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { GoHeart } from "react-icons/go";
import Logo from "@/assets/images/logo.svg";
import { SearchIcon } from "@/assets/icons";
import InputCustom from "@/components/Input/Input";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { Popover, PopoverBackdrop, PopoverButton, PopoverPanel } from "@headlessui/react";
import AccountPopover from "@/components/Header/AccountPopover";

const Header = () => {
  const pathname = usePathname();

  const items = [
    { label: "Home", href: "/" },
    { label: "Contact", href: "/contact" },
    { label: "About", href: "/about" },
    { label: "Sign Up", href: "/sign-up" },
  ];

  return (
    <header className="border-b border-button/30 py-6 px-4">
      <div className="container-custom flex items-center justify-between gap-8">
        {/* Logo */}
        <Link href="/">
          <Image src={Logo} alt="logo" className="w-[118px] h-[24px] object-contain" priority />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-10">
          {items.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              className={clsx({ "border-b": item.href === pathname })}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Search */}
        <div className={"flex items-center gap-6"}>
          <InputCustom
            className={"text-xs !h-[38px] min-w-[250px]"}
            placeholder="What are you looking for?"
            rightIcon={<Image src={SearchIcon} alt="search icon" width={16} height={16} />}
          />
          <div className={"flex items-center gap-4"}>
            <Link href={"/wishlist"}>
              <GoHeart size={24} />
            </Link>
            <Link href={"/cart"}>
              <IoCartOutline size={24} />
            </Link>
            <Popover className="relative">
              <PopoverBackdrop className="fixed inset-0 " />
              <PopoverButton className={"outline-none"}>
                <FiUser size={24} />
              </PopoverButton>
              <PopoverPanel anchor={"bottom end"} className={"mt-2"}>
                <AccountPopover />
              </PopoverPanel>
            </Popover>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
