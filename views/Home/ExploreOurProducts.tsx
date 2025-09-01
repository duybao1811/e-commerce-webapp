import React from "react";
import Section from "@/views/Home/Section";
import Image from "next/image";
import { ArrowLeftIcon, ArrowRightIcon } from "@/assets/icons";
import ProductCard from "@/components/ProductCard/ProductCard";
import ButtonCustom from "@/components/Button/Button";
import ProductExampleImage from "@/assets/images/product-example.png";

const ExploreOurProducts = () => {
  return (
    <Section
      title={"Our Products"}
      subTitle={"Explore Our Products"}
      actionButton={
        <div className={"flex gap-2"}>
          <div
            className={
              "size-[46px] rounded-full cursor-pointer flex items-center justify-center bg-secondary"
            }
          >
            <Image src={ArrowLeftIcon} alt={"icon arrow left"} width={24} height={24} />
          </div>
          <div
            className={
              "size-[46px] rounded-full cursor-pointer flex items-center justify-center bg-secondary"
            }
          >
            <Image src={ArrowRightIcon} alt={"icon arrow left"} width={24} height={24} />
          </div>
        </div>
      }
    >
      <div className={"grid grid-cols-5 gap-x-8 gap-y-[60px]"}>
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

export default ExploreOurProducts;
