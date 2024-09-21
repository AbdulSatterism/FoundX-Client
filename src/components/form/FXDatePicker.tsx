"use client";

import { DatePicker } from "@nextui-org/date-picker";
import { Controller } from "react-hook-form";

interface IInputProps {
  variant?: "flat" | "bordered" | "faded" | "underlined";
  size?: "sm" | "md" | "lg";
  name: string;
  required?: boolean;
  label: string;
  type?: string;
}

const FXDatePicker = ({ label, name, variant = "bordered" }: IInputProps) => {
  return (
    <Controller
      name={name}
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      render={({ field: { value, ...fields } }) => (
        <DatePicker
          className="min-w-full  sm:min-w-[225px]"
          label={label}
          variant={variant}
          {...fields}
        />
      )}
    />
  );
};

export default FXDatePicker;
