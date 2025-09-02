import React from "react";
import { Breadcrumb } from "@/components/Breadcrumb/Breadcrumb";
import CheckoutForm from "@/views/CheckOutView/CheckoutForm";
import OrderSummary from "@/views/CheckOutView/OrderSummary";

const CheckOutView = () => {
  return (
    <div className={"container-custom py-20"}>
      <Breadcrumb
        items={[
          {
            label: "Account",
            href: "/account",
          },
          {
            label: "My Account",
            href: "/my-account",
          },
          {
            label: "View Cart",
            href: "/cart",
          },
          {
            label: "Checkout",
          },
        ]}
      />
      <h1 className={"py-12 text-4xl font-medium"}>Billing Details</h1>
      <div className={"grid grid-cols-2 gap-20"}>
        <CheckoutForm />
        <OrderSummary />
      </div>
    </div>
  );
};

export default CheckOutView;
