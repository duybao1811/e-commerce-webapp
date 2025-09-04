"use client";
import React from "react";
import useCountdownTimer from "@/lib/hooks/useCountdownTimer";
import { padStart } from "@/lib/helpers";

const CountdownFlashSale = () => {
  const { days, minutes, seconds, hours } = useCountdownTimer({
    day: 4,
    hour: 0,
    minute: 0,
    second: 0,
  });
  return (
    <div className={"flex items-end gap-20"}>
      <h2 className="text-4xl font-semibold text-text2">Flash Sales</h2>
      <div className={"flex items-center gap-4"}>
        <div className={"flex flex-col gap-1 w-12"}>
          <p className={"text-xs font-medium"}>Days</p>
          <p className={"font-bold text-3xl"}>{padStart(days, 2)}</p>
        </div>
        <p className={"text-hover-button font-bold text-2xl relative top-2"}>:</p>
        <div className={"flex flex-col gap-1 w-12"}>
          <p className={"text-xs font-medium"}>Hours</p>
          <p className={"font-bold text-3xl"}>{padStart(hours, 2)}</p>
        </div>
        <p className={"text-hover-button font-bold text-2xl relative top-2"}>:</p>
        <div className={"flex flex-col gap-1 w-12"}>
          <p className={"text-xs font-medium"}>Minutes</p>
          <p className={"font-bold text-3xl"}>{padStart(minutes, 2)}</p>
        </div>
        <p className={"text-hover-button font-bold text-2xl relative top-2"}>:</p>
        <div className={"flex flex-col gap-1 w-12"}>
          <p className={"text-xs font-medium"}>Seconds</p>
          <p className={"font-bold text-3xl"}>{padStart(seconds, 2)}</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownFlashSale;
