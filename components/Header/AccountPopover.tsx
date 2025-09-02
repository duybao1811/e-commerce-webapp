import React from "react";
import { FiUser, FiShoppingBag, FiLogOut } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import Link from "next/link";

const AccountPopover = () => {
  return (
    <div
      className={
        "px-5 py-4 text-primary rounded flex flex-col gap-3 bg-button/50 backdrop-blur-2xl"
      }
    >
      <Link href={"/my-account"} className={"flex items-center gap-4"}>
        <FiUser size={24} />
        Manage My Account
      </Link>
      <Link href={"/cart"} className={"flex items-center gap-4"}>
        <FiShoppingBag size={24} />
        My Order
      </Link>
      <Link href={"/cart"} className={"flex items-center gap-4"}>
        <MdOutlineCancel size={24} />
        My Cancellations
      </Link>
      <div className={"flex items-center gap-4 cursor-pointer"}>
        <FiLogOut size={24} />
        Logout
      </div>
    </div>
  );
};

export default AccountPopover;
