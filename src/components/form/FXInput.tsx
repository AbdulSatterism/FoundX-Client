"use client";
import { Input } from "@nextui-org/input";
import { useFormContext } from "react-hook-form";

type TInputProps = {
  variant?: "flat" | "bordered" | "faded" | "underlined";
  size?: "sm" | "md" | "lg";
  name: string;
  required?: boolean;
  label: string;
  type?: string;
};

const FXInput = ({
  variant = "bordered",
  size = "md",
  name,
  required = false,
  label,
  type = "text",
}: TInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Input
      errorMessage={errors[name] ? (errors[name]?.message as string) : ""}
      isInvalid={!!errors[name]}
      variant={variant}
      {...register(name)}
      label={label}
      required={required}
      size={size}
      type={type}
    />
  );
};

export default FXInput;
