import { Button } from "antd";
import React from "react";
import { ButtonWrapper } from "./Button.styled";

const CustomButton = ({
  className,
  title,
  htmlType,
  icon,
  loading,
  buttonWrapperClass,
}) => {
  return (
    <ButtonWrapper className={buttonWrapperClass}>
      <button
        loading={loading}
        icon={icon}
        htmlType={htmlType}
        className={` ${className} btn `}
      >
        {title}
      </button>
    </ButtonWrapper>
  );
};

export default CustomButton;
