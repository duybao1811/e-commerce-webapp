import React from "react";
import ButtonCustom from "@/components/Button/Button";
import InputCustom from "@/components/Input/Input";

const ApplyCoupon = () => {
  return (
    <div className={"flex gap-4"}>
      <div className={"flex-1"}>
        <InputCustom variant={"outlined"} placeholder={"Coupon Code"} />
      </div>
      <ButtonCustom>Apply Coupon</ButtonCustom>
    </div>
  );
};

export default ApplyCoupon;
