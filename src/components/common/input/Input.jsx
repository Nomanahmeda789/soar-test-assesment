import { Input } from "antd";
import React from "react";
import { InputWrapper } from "./Input.styled";

const CustomInput = ({
  placeholder,
  width,
  className,
  onChange,
  value,
  prefix,
  disabled,
  type = "text",
}) => {
  return (
    <InputWrapper>
      <Input
        disabled={disabled}
        prefix={prefix}
        type={type}
        value={value}
        onChange={onChange}
        allowClear
        className={`${className} custom-input`}
        placeholder={placeholder}
        style={{
          width: width,
        }}
      />
    </InputWrapper>
  );
};
export default CustomInput;
