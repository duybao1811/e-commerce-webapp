import React from "react";
import Image from "next/image";

interface ServiceItemProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceItem = ({ icon, title, description }: ServiceItemProps) => {
  return (
    <div className={"flex flex-col items-center"}>
      <div className={"size-20 rounded-full bg-primary1/30 flex items-center justify-center mb-6"}>
        <div className={"size-[60px] rounded-full bg-button flex items-center justify-center"}>
          <Image src={icon} width={40} height={40} alt={"icon service"} />
        </div>
      </div>
      <p className={"text-xl font-semibold mb-2"}>{title}</p>
      <p className={"text-sm"}>{description}</p>
    </div>
  );
};

export default ServiceItem;
