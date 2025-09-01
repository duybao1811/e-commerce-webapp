import React from "react";
import Services from "@/views/Home/Services";
import OutStory from "@/views/AboutView/OutStory";
import Achievement from "@/views/AboutView/Achievement";
import SponsorSection from "@/views/AboutView/SponsorSection";

const AboutView = () => {
  return (
    <div className={"pt-20 pb-32"}>
      <OutStory />
      <div className={"flex flex-col gap-[140px]"}>
        <Achievement />
        <SponsorSection />
        <Services />
      </div>
    </div>
  );
};

export default AboutView;
