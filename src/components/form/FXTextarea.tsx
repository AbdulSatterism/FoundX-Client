import { Textarea } from "@nextui-org/input";
import { useFormContext } from "react-hook-form";

type TInputProps = {
  variant?: "flat" | "bordered" | "faded" | "underlined";
  size?: "sm" | "md" | "lg";
  name: string;
  required?: boolean;
  label: string;
  type?: string;
};

export default function FXTextarea({
  name,
  label,
  variant = "bordered",
}: TInputProps) {
  const {
    register,
    formState: {},
  } = useFormContext();

  return (
    <Textarea {...register(name)} label={label} minRows={6} variant={variant} />
  );
}
