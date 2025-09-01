import React from "react";
import Image from "next/image";
import OurStoryBg from "@/assets/images/outstory-bg.jpg";
const OutStory = () => {
  return (
    <div className={"flex items-center gap-[75px] pl-[135px] mb-[140px]"}>
      <div className={"flex-1"}>
        <h2 className={"text-5xl font-semibold mb-10"}>Our Story</h2>
        <p className={"mb-6"}>
          Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an
          active presense in Bangladesh. Supported by wide range of tailored marketing, data and
          service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
          customers across the region.
        </p>
        <p>
          Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive
          offers a diverse assotment in categories ranging from consumer.
        </p>
      </div>
      <div className={"cols-span-7"}>
        <Image
          src={OurStoryBg.src}
          alt={
            "two african females holding shopping bags while reacting something their smartphone"
          }
          width={705}
          height={609}
        />
      </div>
    </div>
  );
};

export default OutStory;
