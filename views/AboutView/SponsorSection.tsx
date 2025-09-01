import React from "react";
import SponsorCard from "@/views/AboutView/SponsorCard";

const SponsorSection = () => {
  return (
    <div className={"grid grid-cols-4 gap-8 px-[135px]"}>
      <SponsorCard />
      <SponsorCard />
      <SponsorCard />
      <SponsorCard />
    </div>
  );
};

export default SponsorSection;
