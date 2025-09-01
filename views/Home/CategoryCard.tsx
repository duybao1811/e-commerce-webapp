import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  label: string;
  icon: string;
  href: string;
}

const CategoryCard = ({ label, icon, href }: Props) => {
  return (
    <Link
      href={href}
      className={
        "w-full rounded border border-button/30 h-[145px] flex flex-col gap-4 items-center justify-center"
      }
    >
      <Image src={icon} alt={"icon-category"} width={56} height={56} />
      <p className={"text-text2"}>{label}</p>
    </Link>
  );
};

export default CategoryCard;
