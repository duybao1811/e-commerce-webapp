import React from "react";
import Section from "@/views/Home/Section";
import ButtonCustom from "@/components/Button/Button";
import ProductCard from "@/components/ProductCard/ProductCard";
import ProductExampleImage from "@/assets/images/product-example.png";

const BestSelling = () => {
  return (
    <Section
      title={"This Month"}
      subTitle={"Best Selling Products"}
      actionButton={<ButtonCustom>View All</ButtonCustom>}
    >
      <div className={"grid grid-cols-5 gap-8"}>
        <ProductCard
          image={ProductExampleImage}
          name={"The north coat"}
          price={260}
          oldPrice={300}
          rating={5}
          totalRating={65}
        />
        <ProductCard
          image={ProductExampleImage}
          name={"The north coat"}
          price={260}
          oldPrice={300}
          rating={5}
          totalRating={65}
        />
        <ProductCard
          image={ProductExampleImage}
          name={"The north coat"}
          price={260}
          oldPrice={300}
          rating={5}
          totalRating={65}
        />
        <ProductCard
          image={ProductExampleImage}
          name={"The north coat"}
          price={260}
          oldPrice={300}
          rating={5}
          totalRating={65}
        />
        <ProductCard
          image={ProductExampleImage}
          name={"The north coat"}
          price={260}
          oldPrice={300}
          rating={5}
          totalRating={65}
        />
      </div>
    </Section>
  );
};

export default BestSelling;
