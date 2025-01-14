import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type PropInput = {
  name: string;
  type: string;
  defaultValue?: string;
  label?: string;
  placeholder?: string;
};

function FormInput(prop: PropInput) {
  const { name, type, label, placeholder, defaultValue } = prop;
  return (
    <div className="mb-2">
      <Label className="capitalize" htmlFor={name}>
        {label || name}
      </Label>
      <Input
        type={type}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default FormInput;
