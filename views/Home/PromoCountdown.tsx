"use client";
import React from "react";
import useCountdownTimer from "@/lib/hooks/useCountdownTimer";
import { padStart } from "@/lib/helpers";
import AnimateNumber from "@/components/Animation/AnimateNumber";

const PromoCountdown = () => {
  const classNameItem =
    "flex flex-col items-center justify-center size-18 rounded-full bg-primary text-text2";

  const { days, minutes, seconds, hours } = useCountdownTimer({
    day: 5,
  });

  return (
    <div className={"flex items-center gap-4"}>
      <div className={classNameItem}>
        <p className={"font-semibold"}>
          <AnimateNumber value={padStart(days, 2)} height={24} duration={0.5} />
        </p>
        <p className={"text-xs"}>Days</p>
      </div>
      <div className={classNameItem}>
        <p className={"font-semibold"}>
          <AnimateNumber value={padStart(hours, 2)} height={24} duration={0.5} />
        </p>
        <p className={"text-xs"}>Hours</p>
      </div>
      <div className={classNameItem}>
        <p className={"font-semibold"}>
          <AnimateNumber value={padStart(minutes, 2)} height={24} duration={0.5} />
        </p>
        <p className={"text-xs"}>Minutes</p>
      </div>
      <div className={classNameItem}>
        <p className={"font-semibold"}>
          <AnimateNumber value={padStart(seconds, 2)} height={24} duration={0.5} />
        </p>
        <p className={"text-xs"}>Seconds</p>
      </div>
    </div>
  );
};

export default PromoCountdown;
