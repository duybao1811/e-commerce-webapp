import React from "react";
import { CustomerServiceIcon, DeliveryIcon, SecureIcon } from "@/assets/icons";
import ServiceItem from "@/views/Home/ServiceItem";

const Services = () => {
  const data = [
    {
      title: "FREE AND FAST DELIVERY",
      icon: DeliveryIcon,
      description: "Free delivery on all orders over $140",
    },
    {
      title: "24/7 CUSTOMER SERVICE",
      icon: CustomerServiceIcon,
      description: "Friendly 24/7 customer support",
    },
    {
      title: "MONEY BACK GUARANTEE",
      icon: SecureIcon,
      description: "We return money within 30 days",
    },
  ];

  return (
    <div className={"flex items-center justify-center gap-32"}>
      {data.map((item) => {
        return (
          <ServiceItem
            key={item.title}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        );
      })}
    </div>
  );
};

export default Services;
