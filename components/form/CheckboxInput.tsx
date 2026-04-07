"use client";

import { Checkbox } from "../ui/checkbox";

type CheckboxInputProps = {
  label: string;
  name: string;
  defaultChecked?: boolean;
};

const CheckboxInput = ({ label, name, defaultChecked }: CheckboxInputProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={name} name={name} defaultChecked={defaultChecked} />
      <label
        htmlFor={name}
        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  );
};

export default CheckboxInput;
