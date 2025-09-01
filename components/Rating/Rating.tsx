import React from "react";
import Image from "next/image";
import { HalfStarIcon, OutlineStarIcon, StarIcon } from "@/assets/icons";

interface Props {
  totalStars: number;
}

const Rating = ({ totalStars }: Props) => {
  const integerPart = Math.floor(totalStars);
  const hasHalf = totalStars - integerPart >= 0.5; // true/false
  const emptyStars = 5 - integerPart - (hasHalf ? 1 : 0);

  return (
    <div className={"flex"}>
      {Array.from({ length: integerPart }).map((_, index) => (
        <Image key={`full-${index}`} src={StarIcon} alt="icon star" width={20} height={20} />
      ))}
      {/* half star */}
      {hasHalf && (
        <Image key="half" src={HalfStarIcon} alt="icon half star" width={20} height={20} />
      )}

      {Array.from({ length: emptyStars }).map((_, index) => (
        <Image
          key={`empty-${index}`}
          src={OutlineStarIcon}
          alt="icon star empty"
          width={20}
          height={20}
        />
      ))}
    </div>
  );
};

export default Rating;
