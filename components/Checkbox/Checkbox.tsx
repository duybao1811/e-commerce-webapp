"use client";
import React, { useState } from "react";
import { Checkbox, Field, Label } from "@headlessui/react";
import clsx from "clsx";

interface Props {
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  label: string;
}

const CheckboxCustom = ({ defaultChecked, onChange, label }: Props) => {
  const [enabled, setEnabled] = useState(defaultChecked);

  const handleChange = (value: boolean) => {
    setEnabled(value);
    onChange?.(value);
  };

  return (
    <Field className="flex items-center gap-4">
      <Checkbox
        checked={enabled}
        onChange={handleChange}
        className={clsx("group block size-6 rounded border data-checked:bg-secondary2", {
          "border-text2/50": !enabled,
          "border-transparent": enabled,
        })}
      >
        <svg
          className="stroke-white opacity-0 group-data-checked:opacity-100"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path d="M3 8L6 11L11 3.5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Checkbox>
      <Label>{label}</Label>
    </Field>
  );
};

export default CheckboxCustom;
