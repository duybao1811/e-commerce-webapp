import React from "react";
import ProductCard from "@/components/ProductCard/ProductCard";
import ProductExampleImage from "@/assets/images/product-example.png";
import ButtonCustom from "@/components/Button/Button";

const ForYouSection = () => {
  return (
    <div>
      <div className={"flex items-center justify-between mb-[60px]"}>
        <div className={"flex items-center gap-4"}>
          <div className={"w-5 h-10 rounded bg-secondary2"} />
          <p className="text-xl">Just For You</p>
        </div>
        <ButtonCustom variant={"outline"}>See All</ButtonCustom>
      </div>
      <div className={"mb-20 grid grid-cols-4 gap-8"}>
        <ProductCard
          image={ProductExampleImage as unknown as string}
          name={"The north coat"}
          price={260}
          oldPrice={300}
          rating={5}
          totalRating={65}
        />
        <ProductCard
          image={ProductExampleImage as unknown as string}
          name={"The north coat"}
          price={260}
          oldPrice={300}
          rating={5}
          totalRating={65}
        />
        <ProductCard
          image={ProductExampleImage as unknown as string}
          name={"The north coat"}
          price={260}
          oldPrice={300}
          rating={5}
          totalRating={65}
        />
        <ProductCard
          image={ProductExampleImage as unknown as string}
          name={"The north coat"}
          price={260}
          oldPrice={300}
          rating={5}
          totalRating={65}
        />
      </div>
    </div>
  );
};

export default ForYouSection;
