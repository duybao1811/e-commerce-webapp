import React from "react";
import Section from "@/views/Home/Section";
import CategoryCard from "@/views/Home/CategoryCard";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CameraIcon,
  ComputerIcon,
  GamingIcon,
  HeadPhoneIcon,
  PhoneIcon,
  SmartwatchIcon,
} from "@/assets/icons";
import Image from "next/image";

const Categories = () => {
  const data = [
    {
      label: "Phones",
      icon: PhoneIcon,
      href: "/",
    },
    {
      label: "Computers",
      icon: ComputerIcon,
      href: "/",
    },
    {
      label: "Smartwatch",
      icon: SmartwatchIcon,
      href: "/",
    },
    {
      label: "Camera",
      icon: CameraIcon,
      href: "/",
    },
    {
      label: "Headphones",
      icon: HeadPhoneIcon,
      href: "/",
    },
    {
      label: "Gaming",
      icon: GamingIcon,
      href: "/",
    },
  ];
  return (
    <Section
      title={"Categories"}
      subTitle={"Browse By Category"}
      actionButton={
        <div className={"flex gap-2"}>
          <div
            className={
              "size-[46px] rounded-full cursor-pointer flex items-center justify-center bg-secondary"
            }
          >
            <Image src={ArrowLeftIcon} alt={"icon arrow left"} width={24} height={24} />
          </div>
          <div
            className={
              "size-[46px] rounded-full cursor-pointer flex items-center justify-center bg-secondary"
            }
          >
            <Image src={ArrowRightIcon} alt={"icon arrow left"} width={24} height={24} />
          </div>
        </div>
      }
    >
      <div className={"grid grid-cols-6 gap-8"}>
        {data.map(({ label, icon, href }) => (
          <CategoryCard key={label} label={label} icon={icon} href={href} />
        ))}
      </div>
    </Section>
  );
};

export default Categories;
