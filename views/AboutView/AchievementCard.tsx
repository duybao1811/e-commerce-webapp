import React from "react";
import Image from "next/image";

export interface AchievementCardProps {
  icon: string;
  title: string;
  description: string;
}

const AchievementCard = ({ icon, title, description }: AchievementCardProps) => {
  return (
    <div
      className={
        "rounded border border-button/30 py-8 flex flex-col items-center justify-center group hover:bg-secondary2 hover:border-primary transition-all duration-300"
      }
    >
      <div className={"size-20 rounded-full bg-primary1/30 flex items-center justify-center mb-6"}>
        <div className={"size-[60px] rounded-full bg-button flex items-center justify-center"}>
          <Image src={icon} width={40} height={40} alt={"icon service"} />
        </div>
      </div>
      <p className={"text-3xl font-bold mb-3 group-hover:text-primary"}>{title}</p>
      <p className={"text-sm group-hover:text-primary"}>{description}</p>
    </div>
  );
};

export default AchievementCard;
