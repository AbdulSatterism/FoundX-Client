import { Select, SelectItem } from "@nextui-org/select";
import { useFormContext } from "react-hook-form";

interface ISelect {
  options: {
    key: string;
    label: string;
  }[];
  variant?: "flat" | "bordered" | "faded" | "underlined";
  size?: "sm" | "md" | "lg";
  name: string;
  required?: boolean;
  label: string;
  type?: string;
  disabled?: boolean;
}

const FXSelect = ({
  variant = "bordered",
  name,
  label,
  options,
  disabled,
}: ISelect) => {
  const {
    register,
    formState: {},
  } = useFormContext();

  return (
    <Select
      className="min-w-full  sm:min-w-[225px]"
      isDisabled={disabled}
      label={label}
      variant={variant}
      {...register(name)}
    >
      {options.map((option) => (
        <SelectItem key={option.key}>{option.label}</SelectItem>
      ))}
    </Select>
  );
};

export default FXSelect;
