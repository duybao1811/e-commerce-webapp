import React from "react";
import Section from "@/views/Home/Section";
import Ps5Slim from "@/assets/images/ps5-slim.png";
import AttractiveWoman from "@/assets/images/attractive-woman-wearing-hat-posing-black-background.png";
import AmazonEcho from "@/assets/images/amazon-echo-png-clipart-transparent-amazon-echo.png";
import GucciPerfume from "@/assets/images/gucci-perfume.png";
import NewArrivalContent from "@/views/Home/NewArrivalContent";

const NewArrival = () => {
  return (
    <Section title={"Featured"} subTitle={"New Arrival"}>
      <div className={"grid grid-cols-2 gap-8 h-[570px]"}>
        <div className={"rounded bg-button px-8 pt-[90px]"}>
          <div
            className={"bg-contain bg-no-repeat bg-center flex flex-col justify-end size-full"}
            style={{ backgroundImage: `url(${Ps5Slim.src})` }}
          >
            <div className={"pb-8"}>
              <NewArrivalContent
                title={"PlayStation 5"}
                content={`Black and White version of the PS5 \n coming out on sale.`}
                link={"/"}
              />
            </div>
          </div>
        </div>
        <div className={"grid grid-cols-2 gap-8"}>
          <div
            className={
              "col-span-2 rounded bg-button bg-contain bg-no-repeat bg-bottom-right p-8 flex flex-col justify-end w-full"
            }
            style={{ backgroundImage: `url(${AttractiveWoman.src})` }}
          >
            <NewArrivalContent
              title={"Women’s Collections"}
              content={`Featured woman collections that \n give you another vibe.`}
              link={"/"}
            />
          </div>
          <div className={"rounded bg-button p-8"}>
            <div
              className={"bg-contain bg-no-repeat bg-center flex flex-col justify-end size-full"}
              style={{ backgroundImage: `url(${AmazonEcho.src})` }}
            >
              <NewArrivalContent
                title={"Speakers"}
                content={`Amazon wireless speakers`}
                link={"/"}
              />
            </div>
          </div>
          <div className={"rounded bg-button p-8"}>
            <div
              className={"bg-contain bg-no-repeat bg-center flex flex-col justify-end size-full"}
              style={{ backgroundImage: `url(${GucciPerfume.src})` }}
            >
              <NewArrivalContent title={"Perfume"} content={`GUCCI INTENSE OUD EDP`} link={"/"} />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default NewArrival;
