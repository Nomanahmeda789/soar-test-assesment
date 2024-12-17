import React from "react";
import { InputButtonWrapper } from "./InputButton.styled";
import CustomButton from "../button/Button";
import CustomInput from "../input/Input";

const InputButton = ({
  label,
  placeholder,
  buttonText,
  icon,
  htmlType,
  loading,
  name,
  type,
  value,
  onChange,
}) => {
  return (
    <InputButtonWrapper>
      <div className="label">{label}</div>
      <div className="input-button-section">
        <CustomInput
          type={type}
          className={"input-field"}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
        <CustomButton
          loading={loading}
          className="send-button"
          title={buttonText}
          icon={icon}
          htmlType={htmlType}
        />
      </div>
    </InputButtonWrapper>
  );
};

export default InputButton;
