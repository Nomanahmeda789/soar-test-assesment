import { Input } from "antd";
import React from "react";
import { InputWrapper } from "./Input.styled";

const CustomInput = ({
  placeholder,
  className,
  onChange,
  value,
  prefix,
  disabled,
  name,
  label,
  type = "text",
}) => {
  return (
    <InputWrapper>
      {label && <div className="input-label">{label}</div>}
      {type == "password" ? (
        <Input.Password
          name={name}
          disabled={disabled}
          prefix={prefix}
          type={type}
          value={value}
          onChange={onChange}
          allowClear
          className={`${className} custom-input`}
          placeholder={placeholder}
        />
      ) : (
        <Input
          name={name}
          disabled={disabled}
          prefix={prefix}
          type={type}
          value={value}
          onChange={onChange}
          allowClear
          className={`${className} custom-input`}
          placeholder={placeholder}
        />
      )}
    </InputWrapper>
  );
};
export default CustomInput;
