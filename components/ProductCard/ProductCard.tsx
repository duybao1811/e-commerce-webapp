import React from "react";
import Image from "next/image";
import { GoHeart } from "react-icons/go";
import { FiEye } from "react-icons/fi";
import Link from "next/link";
import Rating from "@/components/Rating/Rating";

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  oldPrice?: number;
  rating: number;
  totalRating: number;
}

const ProductCard = ({ image, name, price, oldPrice, rating, totalRating }: ProductCardProps) => {
  return (
    <div>
      <Link
        href={"/"}
        className={
          "rounded bg-secondary flex items-center justify-center mb-4 px-10 py-[35px] relative"
        }
      >
        <Image src={image} alt={"product image"} width={190} height={180} />
        <div className={"absolute top-3 right-3 flex flex-col gap-2 items-center"}>
          <div
            className={
              "size-8 rounded-full flex items-center justify-center cursor-pointer bg-primary"
            }
          >
            <GoHeart width={24} height={24} />
          </div>
          <Link
            href={"/"}
            className={
              "size-8 rounded-full flex items-center justify-center cursor-pointer bg-primary"
            }
          >
            <FiEye width={24} height={24} />
          </Link>
        </div>
      </Link>
      <div className={"flex flex-col gap-2"}>
        <Link href={"/"} className={"font-medium"}>
          {name}
        </Link>
        <div className={"flex items-center gap-3"}>
          <p className={"text-secondary2 font-medium"}>${price}</p>
          <p className={"text-button font-medium opacity-50 line-through"}>${oldPrice}</p>
        </div>
        <div className={"flex items-center gap-2"}>
          <Rating totalStars={rating} />
          <p className={"text-text2 text-sm font-semibold opacity-50"}>({totalRating})</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
