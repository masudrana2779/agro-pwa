import React, { ChangeEventHandler } from "react";

type InputProps = {
  label: string;
  name: string;
  id: string;
  value: string;
  type: string;
  placeholder: string;
  className: string;
  handleChange: ChangeEventHandler;
};
const Select = ({
  label,
  name,
  id,
  value,
  type,
  handleChange,
  placeholder,
  className,
}: InputProps) => {
  return (
      <>
    <select
      id={id}
      className={className}
      name={name}
      onChange={handleChange}
      value={value}
    >
      <option>{placeholder}</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select></>
  );
};

export default Select;
