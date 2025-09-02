import React from "react";
import InputCustom from "@/components/Input/Input";
import CheckboxCustom from "@/components/Checkbox/Checkbox";

const CheckoutForm = () => {
  return (
    <div className={"flex flex-col gap-8"}>
      <InputCustom label={"First Name"} required id={"name"} />
      <InputCustom label={"Company Name"} id={"companyName"} />
      <InputCustom label={"Street Address"} required id={"address"} />
      <InputCustom label={"Apartment, floor, etc. (optional)"} id={"apartment"} />
      <InputCustom label={"Town/City"} required id={"city"} />
      <InputCustom label={"Phone Number"} required id={"phone"} />
      <InputCustom label={"Email Address"} required id={"email"} />
      <CheckboxCustom label={"Save this information for faster check-out next time"} />
    </div>
  );
};

export default CheckoutForm;
