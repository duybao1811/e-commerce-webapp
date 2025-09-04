import React from "react";
import Section from "@/views/Home/Section";
import ProductCard from "@/components/ProductCard/ProductCard";
import ProductExampleImage from "@/assets/images/product-example.png";
import ButtonCustom from "@/components/Button/Button";
import CountdownFlashSale from "@/views/Home/CountdownFlashSale";

const FlashSales = () => {
  return (
    <Section title={"Today's"} subTitle={<CountdownFlashSale />}>
      <div className={"grid grid-cols-5 gap-8"}>
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
        <ProductCard
          image={ProductExampleImage as unknown as string}
          name={"The north coat"}
          price={260}
          oldPrice={300}
          rating={5}
          totalRating={65}
        />
      </div>
      <div className={"flex justify-center mt-[60px]"}>
        <ButtonCustom>View All Products</ButtonCustom>
      </div>
    </Section>
  );
};

export default FlashSales;
