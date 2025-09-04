import React from "react";
import Image from "next/image";
import JblBoombox from "@/assets/images/JBL_BOOMBOX_2_HERO.png";
import ButtonCustom from "@/components/Button/Button";
import PromoCountdown from "@/views/Home/PromoCountdown";
const PromoCountdownBanner = () => {
  return (
    <div className={"bg-button py-10 pl-14 pr-11 grid grid-cols-2 items-center gap-7"}>
      <div className={"flex flex-col gap-8"}>
        <p className={"text-button1"}>Categories</p>
        <p className={"whitespace-pre-line font-semibold text-5xl text-text leading-14"}>
          {"Enhance Your \n Music Experience"}
        </p>
        <PromoCountdown />
        <ButtonCustom variant={"secondary"} className={"w-fit"}>
          Buy Now!
        </ButtonCustom>
      </div>
      <div className={"h-[500px] relative flex items-center justify-center"}>
        <div className={"inset-10 absolute rounded-full bg-[#D9D9D9]/30 blur-3xl"}></div>
        <Image
          src={JblBoombox.src}
          alt={"jbl boombox"}
          width={568}
          height={330}
          className={"object-cover absolute"}
        />
      </div>
    </div>
  );
};

export default PromoCountdownBanner;
