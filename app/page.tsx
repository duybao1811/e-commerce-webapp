import React from "react";
import Categories from "@/views/Home/Categories";
import BestSelling from "@/views/Home/BestSelling";
import ExploreOurProducts from "@/views/Home/ExploreOurProducts";
import NewArrival from "@/views/Home/NewArrival";
import Services from "@/views/Home/Services";
import FlashSales from "@/views/Home/FlashSales";
import PromoCountdownBanner from "@/views/Home/PromoCountdownBanner";

const HomePage = () => {
  return (
    <div className={"flex flex-col gap-[70px] container-custom pt-20 pb-30"}>
      <FlashSales />
      <Categories />
      <div className={"divider"} />
      <BestSelling />
      <PromoCountdownBanner />
      <ExploreOurProducts />
      <NewArrival />
      <Services />
    </div>
  );
};

export default HomePage;
