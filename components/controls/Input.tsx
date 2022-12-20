import React, { ChangeEventHandler } from "react";
import { DivBlock } from "../styledComponents/Typography.Styled";

type InputProps = {
  label: string;
  name: string;
  id: string;
  value: string;
  type: string;
  placeholder: string;
  className: string;
  maxLength:number;
  handleChange: ChangeEventHandler<HTMLInputElement>;
};

function Input({
  label,
  name,
  id,
  value,
  type,
  handleChange,
  placeholder,
  className,
  maxLength
}: InputProps) {
  return (
      <>
      {/* <DivBlock fontSize="14px">{label}</DivBlock> */}
    <input
      type={type}
      id={id}
      maxLength={maxLength}
      name={name}
      value={value}
      className={className}
      placeholder={placeholder}
      onChange={handleChange}
      autoComplete={'false'}
    /></>
  );
}

export default Input;
