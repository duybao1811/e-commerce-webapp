import React from "react";
import ButtonCustom from "@/components/Button/Button";
import ProductCard from "@/components/ProductCard/ProductCard";
import ProductExampleImage from "@/assets/images/product-example.png";
import ForYouSection from "@/views/WishlistView/ForYouSection";

const WishlistView = () => {
  return (
    <div className={"container-custom py-20"}>
      <div className={"flex items-center justify-between mb-[60px]"}>
        <p className={"text-xl"}>Wishlist (4)</p>
        <ButtonCustom variant={"outline"}>Move All To Bag</ButtonCustom>
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
      <ForYouSection />
    </div>
  );
};

export default WishlistView;
