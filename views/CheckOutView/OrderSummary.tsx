"use client";
import React, { useState } from "react";
import ApplyCoupon from "@/views/CheckOutView/ApplyCoupon";
import ButtonCustom from "@/components/Button/Button";
import Image from "next/image";
import ProductExampleImage from "@/assets/images/product-example.png";
import { Field, Label, Radio, RadioGroup } from "@headlessui/react";
import { BKashIcon, MastercardIcon, NagadIcon, VisaIcon } from "@/assets/icons";

const OrderSummary = () => {
  const [paymentMethodSelected, setPaymentMethodSelected] = useState("bank");

  return (
    <div className={"flex flex-col gap-8"}>
      <div className={"flex items-center gap-6"}>
        <Image
          src={ProductExampleImage as unknown as string}
          alt={"product image"}
          width={54}
          height={54}
        />
        <div className={"flex items-center justify-between flex-1"}>
          <p>LCD Monitor</p>
          <p>$650</p>
        </div>
      </div>
      <div className={"flex items-center gap-6"}>
        <Image
          src={ProductExampleImage as unknown as string}
          alt={"product image"}
          width={54}
          height={54}
        />
        <div className={"flex items-center justify-between flex-1"}>
          <p>LCD Monitor</p>
          <p>$650</p>
        </div>
      </div>
      <div className={"flex flex-col gap-4"}>
        <div className={"flex items-center justify-between"}>
          <p>Subtotal:</p>
          <p>$1750</p>
        </div>
        <div className={"divider"} />
        <div className={"flex items-center justify-between"}>
          <p>Shipping:</p>
          <p>Free</p>
        </div>
        <div className={"divider"} />
        <div className={"flex items-center justify-between"}>
          <p>Total:</p>
          <p>$1750</p>
        </div>
      </div>
      <RadioGroup
        value={paymentMethodSelected}
        onChange={setPaymentMethodSelected}
        aria-label="Payment Method"
        className={"flex flex-col gap-8"}
      >
        <Field key={"bank"} className={"flex items-center justify-between"}>
          <div className="flex items-center gap-4">
            <Radio
              value={"bank"}
              className="group flex size-6 items-center justify-center rounded-full border bg-transparent"
            >
              <span className="invisible size-3.5 rounded-full bg-button group-data-checked:visible" />
            </Radio>
            <Label>Bank</Label>
          </div>
          <div className={"flex items-center gap-2"}>
            <Image src={BKashIcon} alt={"Bkash icon"} width={42} height={28} />
            <Image src={VisaIcon} alt={"Visa icon"} width={42} height={28} />
            <Image src={MastercardIcon} alt={"Mastercard icon"} width={42} height={28} />
            <Image src={NagadIcon} alt={"Nagad icon"} width={42} height={28} />
          </div>
        </Field>
        <Field key={"cash"} className="flex items-center gap-4">
          <Radio
            value={"cash"}
            className="group flex size-6 items-center justify-center rounded-full border bg-transparent"
          >
            <span className="invisible size-3.5 rounded-full bg-button group-data-checked:visible" />
          </Radio>
          <Label>Cash on delivery</Label>
        </Field>
      </RadioGroup>
      <ApplyCoupon />
      <ButtonCustom className={"w-fit"}>Place Order</ButtonCustom>
    </div>
  );
};

export default OrderSummary;
