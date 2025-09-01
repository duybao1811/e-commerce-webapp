import React from "react";
import AchievementCard, { AchievementCardProps } from "@/views/AboutView/AchievementCard";
import { MoneyBagIcon, SaleIcon, ShopIcon, ShoppingBagIcon } from "@/assets/icons";

const Achievement = () => {
  const data: AchievementCardProps[] = [
    {
      icon: ShopIcon,
      title: "10.5k",
      description: "Sallers active our site",
    },
    {
      icon: SaleIcon,
      title: "33k",
      description: "Mopnthly Produduct Sale",
    },
    {
      icon: ShoppingBagIcon,
      title: "45.5k",
      description: "Customer active in our site",
    },
    {
      icon: MoneyBagIcon,
      title: "25k",
      description: "Anual gross sale in our site",
    },
  ];

  return (
    <div className={"grid grid-cols-4 gap-8 px-[135px]"}>
      {data.map(({ icon, title, description }, index) => (
        <AchievementCard key={index} icon={icon} title={title} description={description} />
      ))}
    </div>
  );
};

export default Achievement;
